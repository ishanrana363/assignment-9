const express = require("express")
const router = require("./src/Routes/Router")
const app = express()

app.use("/api/v1",router)

app.use((req,res,next)=>{
    res.status(404).json({
        message : "Route not  fuond"
    })
})

module.exports = app