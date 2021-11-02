const router = require('express').Router()
const UserController = require("../controllers/user")
const User = require('../models/user')

router.get("/", UserController.fetchUsers)
router.post("/login", UserController.loginUser)
router.post("/register", UserController.registerUser)
router.post("/rent", UserController.rentCar)
router.patch("/return-car", UserController.returnCar)
router.patch("/cancel-rental", UserController.cancelRental)
router.post("/review", UserController.postReview)

module.exports = router 