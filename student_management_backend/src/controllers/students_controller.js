const e = require('express')
const student_crud = require('./../crud/student_crud')

const getAllstudents = async(req,res)=>{
    const students = await student_crud.getAllStudents()
    res.send(students).status(200)
}

const getstudentsByClass = async(req,res)=>{
    const class_name = req.params.class_name
    const students = await student_crud.getStudentsByClass(class_name)
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
    getAllstudents,getstudentsByClass,createstudent,updatestudents,deletestudents
} 