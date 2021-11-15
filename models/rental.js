const mongoose = require("mongoose");
const { Schema } = mongoose;

const opts = {
  timestamps: {
    createdAt: "rentalInitiatedOn",
    updatedAt: "rentalUpdatedOn",
  },
};

const rentalSchema = new Schema({
  car: {
    type: Schema.Types.ObjectId,
    ref: "Car",
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  /* total cost is calculated with daysRented * costPerDay */
  daysRented: Number,
  status: {
    type: String,
    enum: ["rent-in-progress", "rented", "canceled", "return-in", "returned"],
    required: true,
  },
  opts,
});

const Rental = mongoose.model("Rental", rentalSchema);
module.exports = Rental;
