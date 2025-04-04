const mongoose = require("mongoose")

const connect = async() =>{
    try {
        const connected = await mongoose.connect(process.env.mongo_URL)
        if (connected){
            console.log("mongoDB connected successfully")
        }
        
    } catch (error) {
        console.log(error)
        
    }
}

module.exports = connect