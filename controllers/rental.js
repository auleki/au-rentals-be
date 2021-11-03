const Rental = require("../models/rental")

exports.approveRental = async(req, res) => {
  res.send("Rental has been approved")
}

exports.rentCar = async (req, res) => {
  res.send("Car rental initiated")
}

exports.fetchRental = async(req, res) => {
  res.send("Fetching rental")
}

exports.cancelRental = async(req, res) => {
  res.send("Canceling Rental of " + req.params.rentalId)
}

exports.postReview = async(req, res) => {
  res.send("Review has been posted")
}

exports.returnRental = async(req, res) => {
  res.send("Rental is being returned")
}

exports.rentedCars = async(req, res) => {
  res.send("Showing Rented")
}