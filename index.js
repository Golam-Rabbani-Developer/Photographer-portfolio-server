
// External Imports
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser')
const { urlencoded } = require('body-parser')
const morgan = require('morgan')
const passport = require('passport')
const app = express()




// setting port 
const port = process.env.PORT || 8000;

// setting middleware 
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// setting viewengine 
app.use(morgan('dev'))


// mongoose connection 
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3smkiqd.mongodb.net/photographer-portfolio?retryWrites=true&w=majority`)
    .then(res => console.log('Database Connected'))
    .catch(err => console.log(err))





// checking the user either authenticated or not   
app.use(passport.initialize())
require('./passport')(passport)



// setting all routes
app.use('/photographer-portfolio/services', require('./routers/servicerouter'))
app.use('/photographer-portfolio/reviews', require('./routers/reviewrouter'))
app.use('/photographer-portfolio/users', require('./routers/userrouter'))


app.get('./', (req, res) => {
    res.json({
        message: "Welcome to Phootgraphy"
    })
})


app.listen(port, (req, res) => {
    console.log(`Application is running at ${port}`)
})









