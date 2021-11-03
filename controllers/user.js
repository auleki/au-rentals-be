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
