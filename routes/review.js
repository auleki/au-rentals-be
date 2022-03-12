const router = require("express").Router()
const ReviewController = require("../controllers/review")

router.get("/", ReviewController.getReviews)
router.post("/add", ReviewController.addReview)
router.delete("/:id", ReviewController.deleteReview)

module.exports = router
