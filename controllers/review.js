const Review = require("../models/review")

exports.addReview = async (req, res) => {
  const reviewObj = req.body

  /*
    1. verify if the owner of the review is who rented the car
    2. save to db
  */
}

exports.deleteReview = async (req, res) => {
  const reviewObj = req.body

  /*
    1. verify if the owner of the review is who rented the car 
    and is also the same person trying to delete the review 
    OR 
    if a super admin is one who is trying to delete the review
    2. delete review or throw that the user has no right
  */
}

