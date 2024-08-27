const {Classroom} = require('./../models')
const db_factory = require('./../utils/db_factory')

const getAllClassrooms = async() => await db_factory.getAllRecords(Classroom)

const createclassrooms = async(data) => await db_factory.createRecord(Classroom,data)

module.exports = {
    getAllClassrooms,createclassrooms
}