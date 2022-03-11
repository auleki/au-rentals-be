const jwt = require("jsonwebtoken")


function generateAccessToken(payload) {
  // console.log(username, ":", process.env.TOKEN_SECRET)
  
  return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '1800s' })
}

module.exports = { generateAccessToken }