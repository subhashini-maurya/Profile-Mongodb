const mongoose=require("mongoose");
const validator=require("validator")
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/mydatabse'

const menSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    Phone_No:{
        type:Number,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ('invalid email')
            }
        }
    },
    password:{
        type:String,
        required:true,
        unique:true,
        trim:true
    }
})

//we are creating a new collection

const Usersdetail=new mongoose.model("Profile",menSchema)

module.exports=Usersdetail