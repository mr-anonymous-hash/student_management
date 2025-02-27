const {Students} = require('./../models')
const db_factory = require('./../utils/db_factory')

const getAllStudents = async() => await db_factory.getAllRecords(Students)

const getStudentsByClass = async(class_name) => await db_factory.getRecordById(Students, class_name)

const createStudent = async(data) => await db_factory.createRecord(Students, data)

module.exports = {
    getAllStudents,getStudentsByClass,createStudent
}