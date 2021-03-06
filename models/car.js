const mongoose = require("mongoose");
const { Schema } = mongoose;

const opts = {
  timestamps: {
    createdAt: "carUploadedOn",
    updatedAt: "cardUpdatedOn",
  },
};

const carSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  transmission: {
    type: String,
    required: true,
    enum: ["manual", "automatic"],
  },
  year: {
    type: Number,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  pricePerDay: {
    type: Number,
    required: true,
  },
  colors: [Object],
  renters: {
    type: Schema.Types.ObjectId,
    ref: "User",
  }, // ref to user model
  review: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Review"
  }
}, { opts });

const Car = mongoose.model("Car", carSchema);
module.exports = Car;
