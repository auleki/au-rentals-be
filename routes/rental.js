const router = require("express").Router()
const RentalController = require("../controllers/rental")

router.post("/", RentalController.rentCar)
router.get("/rented", RentalController.rentedCars)
router.get("/:rentalId", RentalController.fetchRental)
router.patch("/:rentalId/cancel", RentalController.cancelRental)
router.post("/:rentalId/review", RentalController.postReview)
router.patch("/:rentalId/return", RentalController.returnRental)

module.exports = router