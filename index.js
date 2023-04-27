const express = require("express")

const app = express()

app.use(express.json())

require('dotenv').config()

const {connection} = require("./config/db.js")

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(process.env.port,async()=>{

    try {
        await connection
        console.log("connected to db")
    } catch (error) {

        console.log({"error connecting to db":error})
        
    }
    console.log(`running on ${process.env.port}`)

})

