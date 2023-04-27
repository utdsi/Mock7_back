const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

require('dotenv').config()

const {connection} = require("./config/db.js")
const {userRouter} = require("./routes/user.route.js")

app.get("/",(req,res)=>{
    res.send("hello")
})
app.use("/",userRouter)

app.listen(process.env.port,async()=>{

    try {
        await connection
        console.log("connected to db")
    } catch (error) {

        console.log({"error connecting to db":error})
        
    }
    console.log(`running on ${process.env.port}`)

})

