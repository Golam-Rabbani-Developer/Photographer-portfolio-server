const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    name: {
        type: String
    },
    picture: {
        type: String
    },
    description: {
        type: String,
    },
    reviews: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Reviews'
        }]
    }
})



const Services = mongoose.model('Services', serviceSchema)

module.exports = Services;