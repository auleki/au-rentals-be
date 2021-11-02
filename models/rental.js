const mongoose = require('mongoose')
const { Schema } = mongoose

const rentalSchema = new Schema({
  car: Object, // reference to exact car
  user: Object, // reference to user
  totalCost: Number,
  daysRented: Number,
  // check if Enum is usable with Mongoose 
  status: Enumerator, // or we use string
  dateRented: Date.now,
})

const Rental = mongoose.model("Rental", rentalSchema)
module.exports = Rental