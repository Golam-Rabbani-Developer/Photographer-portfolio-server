const router = require('express').Router()
const mongoose = require('mongoose');
const authenticate = require('../authenticate');
const { sendReviews, getProductReviews, getPersonsReviews, editReview, removeReview } = require('../controllers/reviewscontroller');

// send the reviews to the database 
router.post('/sendReviews', authenticate, sendReviews)


// get a single product reviws 
router.get('/getPersonsReviews/:id', getProductReviews)


// edit a particular review
router.put('/editReview/:id', editReview)



//get a single persons reviews 
router.get('/getSinglePersonsReviews/:email', authenticate, getPersonsReviews)


//delete a particular review
router.delete('/deleteReview/:id', removeReview)


module.exports = router;