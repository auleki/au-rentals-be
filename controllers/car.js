const Car = require("../models/car")

exports.allCars = async(req, res) => {
  res.send("Showing All Cars")
}

exports.uploadCar = async(req, res) => {
  res.send("Uploading Car...")
}

exports.editCar = async(req, res) => {
  res.send("Car is being edited...")
}

exports.deleteCar = async(req, res) => {
  res.send("Car has been deleted!")
}

exports.findCar = async(req, res) => {
  res.send("Car has been found")
}