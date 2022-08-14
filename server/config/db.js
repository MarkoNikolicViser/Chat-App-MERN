const mongoose=require('mongoose')

const Connection=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
           // useFindAndModify:true
        })
        console.log(`Connection succcess: ${conn.connection.host}`)
    }catch(err){
        console.log(`Error is ${err.message}`)
        process.exit
    }
}
module.exports=Connection