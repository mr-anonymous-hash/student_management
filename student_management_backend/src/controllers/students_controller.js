const e = require('express')
const student_crud = require('./../crud/student_crud')

const getAllstudents = async(req,res)=>{
    const students = await student_crud.getAllStudents()
    res.send(students).status(200)
}

const getstudentsById = async(req,res)=>{
    const classroom = req.body.class
    const students = await student_crud.getStudentByClass(classroom)
    if(students){
        res.status(200).send(students)
    }else{
        res.status(404).send({message:"students by class not found "})
    }
}

const createstudent = async(req,res)=>{
    const {student_name,roll_no,classroom} = req.body
    const student = await student_crud.createStudent({student_name,roll_no,classroom})
    if(student){
        res.status(201).send(student)
    }else{
        res.status(400).send({message:"unable to create student record"})
    }
}

const updatestudents = async(req,res)=>{
    res.send()
}

const deletestudents = async(req,res)=>{
    res.send()
}

module.exports = {
    getAllstudents,getstudentsById,createstudent,updatestudents,deletestudents
} 