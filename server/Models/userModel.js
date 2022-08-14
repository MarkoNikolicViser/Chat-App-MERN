const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')

const userModel=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,uniqe:true},
    password:{type:String,required:true},
    picture:{type:String,default:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'}
})

userModel.pre('save',async function(next){
if(!this.isModified){
next()}
const salt =await bcrypt.genSalt(10)
this.password=await bcrypt.hash(this.password,salt)
})
userModel.methods.matchPassword=async function(password){
return await bcrypt.compare(password,this.password)
}

const User=mongoose.model("User",userModel)
module.exports=User