const router = require('express').Router()
const UserController = require("../controllers/user")

router.get("/", UserController.fetchUsers)
// router.post("/login", UserController.loginUser)
// router.post("/register", UserController.registerUser)

module.exports = router 