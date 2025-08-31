import prisma from "../lib/prisma.js"
import bcrypt from "bcrypt"



export const register = async(req,res) =>{
const {username,email,password} = req.body
// HASH PASSWORD
const hashedPassword = await bcrypt.hash(password,10)
// CREATE USER AND STORE IN DB
try{
const newuser = await prisma.user.create({
    data:{
        username,
        email,
        password:hashedPassword
    }
})
res.status(201).json({message:"User created successfully"})
console.log("🚀 ~ register ~ newuser:", newuser)
}catch(err){
    console.log("🚀 ~ register ~ err:", err)
    res.status(500).json({message:"Failed to create user"})
}
}






export const login = (req,res) =>{
// db operations
}

export const logout = (req,res) =>{
// db operations
}