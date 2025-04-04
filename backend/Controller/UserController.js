const { default: mongoose } = require("mongoose")
const userModel = require("../Model/UserModel")

const userSignUp = async(req, res)=>{
    try {
        console.log(req.body)
        const {username, email, password} = req.body

        if(!username || !email || !password){
            console.log("missing detail")
            res.status(400).send({message:"all fields are mandatory", status:false})
        }else{
            const user = await userModel.create({
                    username,
                    email,
                    password,
                })
                if(user){
                    console.log("sign up successful")
                    res.status(200).send({message:"sign up successful", status:true})
                }
           
        }
        
    } catch (error) {
        console.log(error)
        
    }
}

module.exports = {userSignUp}