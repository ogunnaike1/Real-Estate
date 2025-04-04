const express = require("express")
const mongoose = require("mongoose")
const app = express()
const PORT = 4017


app.get("/", (req,res)=>{
    res.send("hello word")
})

app.listen(PORT, ()=>{
    console.log("app is working on port " + PORT)
})