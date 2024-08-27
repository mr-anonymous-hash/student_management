const {Classroom} = require('./../models')
const db_factory = require('./../utils/db_factory')

const getAllClassrooms = async() => await db_factory.getAllRecords(Classroom)

module.exports = {
    getAllClassrooms
}