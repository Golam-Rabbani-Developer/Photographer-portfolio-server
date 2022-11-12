const { registration } = require('../controllers/usercontroller')

const router = require('express').Router()


// sending router to the database 
router.post('/registration', registration);


module.exports = router;