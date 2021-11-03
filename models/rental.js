const mongoose = require('mongoose')
const { Schema } = mongoose

const rentalSchema = new Schema({
  car: {
    type: Schema.Types.ObjectId,
    ref: "Car"
  }, // reference to exact car
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }, // reference to user
  // total cost is calculated with daysRented * costPerDay
  daysRented: Number,
  // check if Enum is usable with Mongoose 
  status: {
    type: String,
    enum: [
      'rent-in-progress',
      'rented', 
      'canceled', 
      'return-in',
      'returned'
    ]
  }, // or we use string
  dateRented: Date,
})

const Rental = mongoose.model("Rental", rentalSchema)
module.exports = Rental