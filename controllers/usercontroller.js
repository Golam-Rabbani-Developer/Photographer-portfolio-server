const Users = require("../models/usermodel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {


    // sending user to the server 
    registration(req, res) {
        // getting data from frontend 
        let { name, password, email } = req.body;


        // hashing the password
        bcrypt.hash(password, 10, function (err, hash) {
            if (err) {
                console.log(err)
            }
            if (hash) {
                password = hash;


                // creting a user 
                const user = new Users({
                    name, email, password
                })

                // generating token for the user 
                const token = jwt.sign({
                    name, email
                }, 'secret', { expiresIn: '1d' });


                // saving the user to the database 
                Users.findOne({ email: email })
                    .then(prevuser => {
                        if (prevuser) {
                            res.status(200).json({
                                message: `User Already Exist`
                            })
                        }
                        if (!prevuser) {
                            user.save()
                                .then(user => {
                                    if (user) {
                                        res.status(200).json({
                                            user,
                                            token
                                        })
                                    }
                                })
                                .catch(err => console.log(err))
                        }
                    })
                    .catch(err => console.log(err))
            }
        })

    },
    login(req, res) {
        // getting data from frontend 
        let { password, email } = req.body;

        // checking the user 
        Users.findOne({ email: email })
            .then(user => {
                if (user) {

                    // user password checking 
                    bcrypt.compare(password, user.password).then(function (result) {
                        if (result) {
                            res.status(200).json({
                                user
                            })
                        } else {
                            res.status(200).json({
                                messgage: "Password Didn't Match"
                            })
                        }
                    });
                }
                if (!user) {
                    res.status(401).json({
                        message: 'Unauthorized User'
                    })
                }
            })
            .catch(err => console.log(err))
    },


}