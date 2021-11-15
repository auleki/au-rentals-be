const router = require("express").Router()
const CarController = require("../controllers/car")

router.get("/", CarController.allCars)
router.post("/", CarController.uploadCar)
router.get("/:cardId", CarController.findCar)
router.patch("/:cardId", CarController.editCar)
router.delete("/:cardId", CarController.deleteCar)

module.exports = router 