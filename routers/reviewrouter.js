const router = require('express').Router()
const mongoose = require('mongoose');
const { sendReviews, getAllreviews, getPersonReviews } = require('../controllers/reviewscontroller');

// send the reviews to the database 
router.post('/sendReviews', sendReviews)

// get All reviews 
router.get('/getAllReviews', getAllreviews)

// get a single reviws 
router.get('/getPersonsReviews/:id', getPersonReviews)


module.exports = router;