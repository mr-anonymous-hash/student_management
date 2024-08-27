const { where } = require("sequelize");

const getAllRecords = async(model) => {
    try{
        const records = await model.findAll();
        return records
    }catch(err){
        console.log(`Error while fetching:${err}`);
        return false;
    }
}

const getRecordById = async(model,class_name) =>{
    try{
        const record = await model.findAll({where:{class_name}});
        return record
    }catch(err){
        console.log(`Error while fetching:${err}`);
        return false;
    }
}

const createRecord = async (model, data) =>{
    try{
        const record = await model.create(data)
        return record
    }catch(err){
        console.log(`Error while fetching:${err}`);
        return false;
    }
}

const updateRecord = async(model, data) =>{
    try{
        const record = await model.create(data)
        return record
    }catch(err){
        console.log(`Error while fetching:${err}`);
        return false;
    }
}

const deleteRecord = async(model, id) =>{
    try{
        const record = await model.destroy(id)
        return record
    }catch(err){
        console.log(`Error while fetching:${err}`);
        return false;
    }   
}



module.exports = {
    getAllRecords,getRecordById,createRecord,updateRecord,deleteRecord
}