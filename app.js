require('dotenv').config()
const express = require("express")
const app = express()
const cors = require('cors')
const morgan = require('morgan')
 const connectDB = require('./config/connectDb')

/* CONNECTION TO DATABASE */
connectDB(app)

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

/* ROUTE IMPORTS */ 
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")
const rentalRoutes = require("./routes/rental")
const carRoutes = require("./routes/car")

app.use("/", authRoutes)
app.use("/users", userRoutes)
app.use("/rental", rentalRoutes)
app.use("/car", carRoutes)

/* ADD ERROR HANDLING MIDDLEWARE*/ 






