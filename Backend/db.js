const mongoose = require("mongoose")
require("dotenv").config()
 
const mongoURL = process.env.MongoLocal
// const serverMongo = process.env.Mongodb
 

mongoose.connect(mongoURL)

const db = mongoose.connection

db.on("connected",()=>{
    console.log("connected successfully to the mongoDB")
})
db.on("error",()=>{
    console.log("error",error)
})
db.on("disconnected",()=>{
    console.log("server disconnected")
})

module.exports = db