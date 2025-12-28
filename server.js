const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")
const express = require("express")
const app = express()

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoBD")
})

//middleware
const morgan = require("morgan")
app.use(morgan("dev"))
app.use(express.json())

//Routes

app.listen(3000, () => {
    console.log("Express is ready")
})