const router = require("express").Router()
const RentalController = require("../controllers/rental")

router.post("/", RentalController.rentalCar)
router.get("/:rentalId", RentalController.fetchRental)
router.patch("/:rentalId/cancel", RentalController.cancelRental)
router.post("/:rentalId/review", RentalController.postReview)
router.patch("/:rentalId/return", RentalController.rentalCar)

module.exports = router