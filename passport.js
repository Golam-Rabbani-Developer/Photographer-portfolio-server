const Users = require('./models/usermodel');


const jwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()

opts.secretOrKey = 'secret'

module.exports = passport => {
    passport.use(new jwtStrategy(opts, (payload, done) => {

        Users.findOne({ email: payload.email })
            .then(user => {
                if (!user) {
                    return done(null, false)
                } else {
                    return done(null, user)
                }
            })
            .catch(err => {
                console.log(err)
                done(err, false)
            })

    }))
}
