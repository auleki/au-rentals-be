const router = require('express').Router()
const UserController = require("../controllers/user")

router.get("/", UserController.fetchUsers)
router.post("/", UserController.createUser)
router.patch("/:userId", UserController.editUser)
router.post("/login", UserController.loginUser)
router.post("/register", UserController.registerUser)
router.post("/reset-password", UserController.resetPassword)

module.exports = router 