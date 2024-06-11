const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const coursesRouter = require('./routes/coursesRoutes')

const app = express()
app.use(cors({
    origin: "*",
    method: "*",
    allowedHeaders: "*",
    exposedHeaders: "*"
}))
app.use(express.json())
app.use('/courses', coursesRouter)

const connectToDbAndStart = async ()=>{
    await mongoose.connect('mongodb+srv://amtulrahmansadiya:eIK1BZVHr27CUmtC@cluster0.ybjbtjb.mongodb.net/students-courses-db?retryWrites=true&w=majority')
    
    console.log('Connected to DB')

    app.listen(8000)
}
connectToDbAndStart()