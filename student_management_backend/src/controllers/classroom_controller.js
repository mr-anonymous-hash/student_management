const classroom_crud = require('./../crud/classroom_crud')

const getAllclassrooms = async(req,res)=>{
    const classroom = await classroom_crud.getAllClassrooms()
    res.send(classroom).status(200)
}


const createclassrooms = async(req,res)=>{
    const class_room = req.body
    const classroom = await classroom_crud.createclassrooms(class_room)
    if(classroom){
        res.status(201).send(classroom)
    }else{
        res.status(400).send({message:'cannot create class'});
        
    }
}

const updateclassrooms = async(req,res)=>{
    res.send()
}

const deleteclassrooms = async(req,res)=>{
    res.send()
}

module.exports = {
    getAllclassrooms,createclassrooms,updateclassrooms,deleteclassrooms
} 