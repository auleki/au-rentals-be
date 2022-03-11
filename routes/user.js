const router = require('express').Router()
const UserController = require("../controllers/user")

router.get("/", UserController.fetchUsers)
router.get("/:id", UserController.fetchUser)
router.patch("/:id", UserController.editUser)
router.post("/reset-password", UserController.resetPassword)

module.exports = router 