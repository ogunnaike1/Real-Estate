const express = require("express")
const connect = require("./Dbconfig/Dbconfig")
const app = express()

require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });
const mongoose = require("mongoose")
const userRouter = require("./Routes/UserRouter")
const PORT = 4017
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use('/user', userRouter)


app.get("/", (req,res)=>{
    res.send("hello word")
})

connect()
app.listen(PORT, ()=>{
    console.log("app is working on port " + PORT)
})