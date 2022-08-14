const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const Connection =require('./config/db')
const userRoutes=require('./routes/userRoutes')
const app=express()
const {errorHandler,notFound}=require('./middleware/errorMidleware')
app.use(express.json())
dotenv.config()
Connection()

app.use(cors())
app.use('/user',userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(process.env.PORT, console.log(`we runin at ${process.env.PORT}`))