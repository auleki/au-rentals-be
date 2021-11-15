const Car = require("../models/car")

exports.allCars = async(req, res) => {
  res.send("Showing All Cars")
}

exports.uploadCar = async(req, res) => {
  const newCar = new Car(req.body)
  const savedCar = await newCar.save()
  res.send(savedCar)
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