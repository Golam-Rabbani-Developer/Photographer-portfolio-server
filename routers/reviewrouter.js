const router = require('express').Router()
const mongoose = require('mongoose');
const { sendReviews, getProductReviews, getPersonsReviews, editReview } = require('../controllers/reviewscontroller');

// send the reviews to the database 
router.post('/sendReviews', sendReviews)


// get a single product reviws 
router.get('/getPersonsReviews/:id', getProductReviews)


// edit a particular review
router.put('/editReview/:id', editReview)



//get a single persons reviews 
router.get('/getSinglePersonsReviews/:email', getPersonsReviews)


module.exports = router;