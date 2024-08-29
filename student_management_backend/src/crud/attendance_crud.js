const {Attendance, Students} = require('./../models')
const db_factory = require('./../utils/db_factory')

const getAllAttendance = async() => await db_factory.getAllRecords(Attendance)

//async(class_name) => await db_factory.getRecordById(Attendance, class_name)

const getAttendanceByClass = async (className) => {
    try {
      const students = await Students.findAll({
        where: {
          class_name: className // Fixed the syntax for passing className
        },
        include: [{
          model: Attendance,
          as: 'attendances', // Make sure to use the correct alias defined in the association
          where: {
            class_name: className // Fixed the syntax for passing className
          },
          required: false // Ensures LEFT JOIN behavior
        }],
        raw: true // Return raw data instead of model instances
      });
  
      return students;
    } catch (error) {
      console.error('Error fetching data:', error);
      return false;
    }
  };

const createAttendance = async(data) => await db_factory.createRecord(Attendance, data)

module.exports = {
    getAllAttendance,getAttendanceByClass,createAttendance
}