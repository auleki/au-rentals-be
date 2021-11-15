const User = require("../models/user")

exports.fetchUsers = async (req, res) => {
  res.send("Fetched Users")
}

exports.loginUser = async (req, res) => {
  res.send("Logging in user")
}

exports.registerUser = async (req, res) => {
  res.send("Registering user")
}

exports.resetPassword = async(req, res) => {
  res.send("Password has been reset")
}

exports.createUser = async(req, res) => {
  try {
    const newUser = new User(req.body)
    const savedUser = await newUser.save()
    res.send(savedUser)
  } catch (error) {
    res.send(error)
  }
  
}

exports.editUser = async(req, res) => {
  res.send("Editing user...")
}