const mongoose = require('mongoose')
const { Schema } = mongoose

const carSchema = new Schema({
  brand: String,
  transmissionAutomatic: {
    type: String,
    enum: ['manual', 'automatic']
  },
  year: Number,
  model: String,
  colors: [Object],
  pricePerDay: Number,
  renters: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }, // ref to user model
  dateUploaded: {
    type: Date,
    default: Date.now
  },
})

const Car = mongoose.model('Car', carSchema)
module.exports = Car