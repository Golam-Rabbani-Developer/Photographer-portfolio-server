const Reviews = require("../models/reviewsmodel");
const Services = require("../models/servicesmodels");

module.exports = {

    // send a reviews 
    sendReviews(req, res) {
        let { name, description, email, picture, author, id } = req.body;

        const review = new Reviews({
            name, description, picture, email, author: [], productid: id
        })

        review.save()
            .then(review => {
                if (review) {
                    return res.status(200).json({ review })
                }
            })
            .catch(err => res.status(400).json(
                { 'messsage': err }
            ))
    },



    // get a particular Product reviews 
    getProductReviews(req, res) {
        let { id } = req.params;
        Reviews.find({ productid: id })
            .then(reviews => {
                if (reviews) {
                    res.status(200).json(
                        reviews
                    )
                }
            })
            .catch(err => res.status(400).json(
                { 'message': err }
            ))
    },


    // get a particular persons reviews 
    getPersonsReviews(req, res) {
        let { email } = req.params;
        Reviews.find({ email: email })
            .then(reviews => {
                if (reviews) {
                    res.status(200).json(
                        reviews
                    )
                }
            })
            .catch(err => res.status(400).json(
                { 'message': err }
            ))
    }
}