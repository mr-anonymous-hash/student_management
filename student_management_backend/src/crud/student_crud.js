const {Students} = require('./../models')
const db_factory = require('./../utils/db_factory')

const getAllStudents = async() => await db_factory.getAllRecords(Students)

const getStudentByClass = async(class_name) => await db_factory.getAllRecords(Students, class_name)

const createStudent = async(data) => await db_factory.getAllRecords(Students, data)

module.exports = {
    getAllStudents,getStudentByClass,createStudent
}