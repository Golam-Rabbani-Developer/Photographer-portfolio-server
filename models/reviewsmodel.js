const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    name: String,
    description: String,
    picture: String,
    email: String,
    productid: String,
    authon: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Users'
        }]
    }
})


const Reviews = mongoose.model('Reviews', reviewSchema);

module.exports = Reviews;