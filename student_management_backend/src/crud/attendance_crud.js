const {Attendance} = require('./../models')
const db_factory = require('./../utils/db_factory')

const getAllAttendance = async() => await db_factory.getAllRecords(Attendance)

const getAttendanceByClass = async(class_name) => await db_factory.getRecordById(Attendance, class_name)

const createAttendance = async(data) => await db_factory.createRecord(Attendance, data)

module.exports = {
    getAllAttendance,getAttendanceByClass,createAttendance
}