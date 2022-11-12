const mongoose = require('mongoose');
const { sendServices, getAllServices, getSingleService, getService } = require('../controllers/servicecontrollers');
const router = require('express').Router();


// send a new services to database 
router.post('/addservice', sendServices);

//get only 3 service
router.get('/getservice', getService)


// get All services 
router.get('/getAllService', getAllServices)


//get a single service
router.get('/getSingleService/:id', getSingleService)

module.exports = router;

