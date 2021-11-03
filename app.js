require('dotenv').config()
const express = require("express")
const app = express()
const userRoutes = require("./routes/user")
const rentalRoutes = require("./routes/rental")
const cors = require('cors')
const morgan = require('morgan')

app.use(cors())
app.use(morgan('dev'))

app.use("/user", userRoutes)
app.use("/rental", rentalRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('Server up @ ' + PORT))