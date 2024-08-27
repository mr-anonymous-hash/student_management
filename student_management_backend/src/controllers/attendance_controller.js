const attendance_crud = require('./../crud/attendance_crud')

const getAllAttendance = async(req,res)=>{

    const attendance = await attendance_crud.getAllAttendance()
    res.send(attendance).status(200)
}

const getAttendanceByClass = async(req,res)=>{
    const class_name = req.params.class_name
    const attendance = await attendance_crud.getAttendanceByClass(class_name)
    if(attendance){
        res.status(200).send(attendance)
    }
    else{
        res.status(400).send({message:'Attendance for this Class not found'})
        return false;
    }
}

const createAttendance = async(req,res)=>{
    const {attendance_date,roll_no,class_name,attendance_status} = req.body
    const attendance = await attendance_crud.createAttendance({attendance_date,roll_no,
        class_name,attendance_status});
    if(attendance){
        res.status(201).send(attendance)
    }else{
        console.log('cannot put attendance')
    }

}

const updateAttendance = async(req,res)=>{
    res.send()
}

const deleteAttendance = async(req,res)=>{
    res.send()
}

module.exports = {
    getAllAttendance,getAttendanceByClass,createAttendance,updateAttendance,deleteAttendance
} 