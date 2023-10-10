require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const Port=process.env.PORT || 3000
const app=express()
app.use(express.json())
const route=require('./Routes/route')
app.listen(Port,()=>{
    console.log(`Server Runing in Port=${Port}`)
})

mongoose.connect(process.env.URL).then(()=>{
    console.log("Connected....")
}).catch(err=>console.log(err))

app.use(route)