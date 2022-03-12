const mongoose = require("mongoose");
const { Schema } = mongoose;

const opts = {
  timestamps: {
    createdAt: "reviewGivenOn",
    updatedAt: "reviewUpdatedOn",
  },
}

const reviewSchema = new Schema({
  review: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  car: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Car"
  },
  rental: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Rental"
  }
}, { opts })

module.exports = mongoose.model("Review", reviewSchema)