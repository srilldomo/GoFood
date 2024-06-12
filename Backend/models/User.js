const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
location:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
Date:{
    type:Date,
    default:Date.now
},
})

const user = mongoose.model("user",UserSchema)

module.exports = user