const { registration, login } = require('../controllers/usercontroller')

const router = require('express').Router()


// sending user to the database 
router.post('/registration', registration);

//login user route
router.post('/login', login)


module.exports = router;