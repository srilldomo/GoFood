const express = require("express")
const app = express()
const PORT= 4000 
const db = require("./db");
const router = require("./Routes/User")

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With,Content-Type, Accept"
    )
    next()
})

 
 app.use(express.json())
 

app.get("/",(req,res)=>{
    res.send("Hello GoFood")
})

app.use("/",router)

app.listen(PORT , ()=>console.log(`Server started at ${PORT}`))