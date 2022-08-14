const asyncHandler=require('express-async-handler')
const User=require('../Models/userModel')
const generateToken=require('../config/generateToken')

const registerUser=asyncHandler(async(req,res)=>{
    const {name,email,password,image}=req.body
    // if(!name||!email||!password){
    //     res.status(400)
    //     throw new Error('Please fill all the fields')
    // }
    
    const existUser=await User.findOne({email})
    if(existUser){
        res.status(400)
        throw new Error('User already exist')
    }
    const user=await User.create({name,email,password,image})
    if(user){
        res.status(201).json({_id:user._id,
            email:user.email,
            name:user.name,
            image:user.image,
            token:generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('User creation failed!')
    }
})
const loginUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body
    const existUser=await User.findOne({email})

    if(existUser&&(await existUser.matchPassword(password))){
        res.json({_id:existUser._id,
            email:existUser.email,
            name:existUser.name,
            image:existUser.image,
            token:generateToken(existUser._id)
        })
    }else{
        throw new Error('Invalid email or password')
    }

})
module.exports={registerUser,loginUser}