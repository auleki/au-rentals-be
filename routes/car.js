const router = require("express").Router()
const CarController = require("../controllers/car")

router.get("/", CarController.allCars)
router.post("/", CarController.uploadCar)
router.get("/:id", CarController.findCar)
router.patch("/:id", CarController.editCar)
router.delete("/:id", CarController.deleteCar)

module.exports = router 