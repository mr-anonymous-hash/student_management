const sequelize = require('./database');
const DataTypes = require('sequelize');

const Classroom = sequelize.define('classrooms', {
    class_name:{
        type: DataTypes.STRING,
        allowNull:false,
        unquie: true
    }
  });
  
const Students = sequelize.define('students',{
    student_name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    roll_no:{
        type: DataTypes.STRING,
        allowNull:false
    },
    class_name:{
        type: DataTypes.STRING,
        allowNull:false
    }
})

const Attendance = sequelize.define('attendance',{
    attendance_date:{
        type: DataTypes.DATE,
        allowNull:false
    },
    roll_no:{
        type: DataTypes.STRING,
        allowNull:false
    },
    class_name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    attendance_status:
    {
        type: DataTypes.BOOLEAN,
        allowNull:false
    }


})
  // Sync the database and model
  sequelize.sync().then(() => {
    console.log('Database & tables created!');
  });
  

  module.exports = {
    Classroom,Students,Attendance
  }