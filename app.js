const express = require("express")
const app = express()
const userRoutes = require("./routes/user")
const rentalRoutes = require("./routes/rental")

// app.get("/", (req, res) => res.send('Fucking A+'))
app.get("/user", userRoutes)
// app.get("/user", (req, res) => res.send("Hitting User+"))
app.get("/rentals", rentalRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('Server up @ ' + PORT))