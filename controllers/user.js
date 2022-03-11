const User = require("../models/user")
const bcrypt = require('bcrypt')

exports.fetchUsers = async (req, res) => {
  res.send("Fetched Users")
}

exports.fetchUser = async (req, res) => {
  res.send("Fetched user of ID: " + req.params.id)
}

exports.resetPassword = async(req, res) => {
  res.sendStatus(200, "Password is being reset...")
}

exports.editUser = async(req, res) => {
  res.send("Editing user...")
}