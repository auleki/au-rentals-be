const mongoose = require('mongoose')
const { Schema } = mongoose
/*
colors = [
  {
    colorName: 'Blue',
    picture: 'url string'
  },
  {
    colorName: 'Red',
    picture: 'url string'
  }
]
*/
const carSchema = new Schema({
  brand: String,
  transmissionAutomatic: Boolean,
  year: Number,
  model: String,
  colors: Array,
  pricePerDay: Number,
  renters: Object, // ref to user model
  dateUploaded: Date.now
})

const Car = mongoose.model('Car', carSchema)
module.exports = Car