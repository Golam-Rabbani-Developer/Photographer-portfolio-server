const Users = require("../models/usermodel");
const jwt = require('jsonwebtoken');

module.exports = {


    // sending user to the server 
    registration(req, res) {
        let { name, password, email } = req.body;

        const user = new Users({
            name, email, password
        })

        const token = jwt.sign({
            data: {
                name, email
            }
        }, 'secret', { expiresIn: '1d' });

        user.save()
            .then(user => {
                if (user) {
                    res.staus(200).json({ user, token })
                }
            })
            .catch(err => console.log(err))
    },


}