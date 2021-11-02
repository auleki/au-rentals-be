const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  age: Number,
  occupation: String,
  avatar: String,
  rentals: Object, // ref to the rental model,
  dateJoined: Date.now,
  secretQuestion: String,
  secretAnswer: String,
  state: String,
  city: String,
  address: String
})

const User = mongoose.model("User", userSchema)
module.exports = User