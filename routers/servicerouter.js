const mongoose = require('mongoose');
const { sendServices, getAllServices, getSingleService } = require('../controllers/servicecontrollers');
const router = require('express').Router();


// send a new services to database 
router.post('/addservice', sendServices);


// get All services 
router.get('/getAllService', getAllServices)


//get a single service
router.get('/getSingleService/:id', getSingleService)

module.exports = router;