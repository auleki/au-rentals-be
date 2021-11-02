const express = require("express")
const app = express()
const userRoutes = require("./routes/user")
const carRoutes = require("./routes/car")

app.get("/user", userRoutes)
app.get("/car", carRoutes)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('Server up @ ' + PORT))