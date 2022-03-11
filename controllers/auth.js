const User = require("../models/user")
const bcrypt = require('bcrypt')
const { generateAccessToken } = require("../helpers/jwt")


exports.loginUser = async (req, res) => {
  /* 
    1. Check if username exists.
    2. Check if password hash matches the password that was brought in.
    3. If both info are correct, implement JWT token
    4. JWT token is signed and an access token and refresh token are created
    5. Access token is sent via http only to the client
  */

    try {
      const { username, password } = req.body
      const foundUser = await User.findOne({ username })
      const passwordMatch = await bcrypt.compare(password, foundUser.password)
      if (passwordMatch) {
        const token = generateAccessToken({ username: foundUser.username, firstName: foundUser.firstName })
        res.status(200).send({ msg: "Logging in user...", accessToken: token })
      } else {
        res.status(400).send("username or password incorrect, try again")
      }
    } catch (error) {
      res.status(400).send(error)
    }
}

exports.registerUser = async(req, res) => {
    const saltRounds = 10
    const { body } = req
    bcrypt.hash(req.body.password, saltRounds, async function(err, hash) {
      if (!err) {
        const userObj = {
          firstName: body.firstName, 
          lastName: body.lastName, 
          username: body.username, 
          roles: body.roles,
          password: hash  
        }        
        try {
          const newUser = new User(userObj)
          const savedUser = await newUser.save()
          res.status(201).send({ msg: "Account Created", data: savedUser })
        } catch (error) {
          res.status(400).send(error)
        }
      }
      res.status(400).send(err)
    })
}

exports.resetPassword = async(req, res) => {
  /* 
    1. If username exists & they give right answer to security question
    2. Retrieve the old password's hash and store that in previous passwords
    2. Accept the new password, hash it and update the current password
  */
  res.send("Password has been reset")
}


/* ADD VERIFY EMAIL CONTROLLER */