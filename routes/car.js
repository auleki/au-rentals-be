const router = require("express").Router()
const CarController = require("../controllers/car")

router.get("/", CarController.allCars)
router.get("/:cardId", CarController.findCar)
router.post("/", CarController.uploadCar)
router.patch("/:cardId", CarController.editCar)
router.delete("/:cardId", CarController.deleteCar)