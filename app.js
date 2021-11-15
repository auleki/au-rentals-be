require('dotenv').config()
const express = require("express")
const app = express()

const cors = require('cors')
const morgan = require('morgan')
const mongoose = require("mongoose")

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

/* ROUTE IMPORTS */ 
const userRoutes = require("./routes/user")
const rentalRoutes = require("./routes/rental")
const carRoutes = require("./routes/car")

app.use("/user", userRoutes)
app.use("/rental", rentalRoutes)
app.use("/car", carRoutes)

const PORT = process.env.PORT || 5000

/* CONNECTION TO DATABASE */
const DB_URL = process.env.MONGODB_URL
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(DB_URL, mongooseOptions, err => {
  if (!err) {
    console.log("Database Connected")
    app.listen(PORT, () => console.log('Server up @ ' + PORT))
  } else {
    console.log("Couldn't connect to DB", err)
  }
})

