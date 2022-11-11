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



    // get all reviews 
    getAllreviews(req, res) {
        Reviews.find({})
            .then(reviews => {
                if (reviews) {
                    res.status(200).json({
                        reviews
                    })
                } else {
                    res.status(200).json({
                        message: "NO data Found"
                    })
                }
            })
            .catch(err => res.status(400).json({
                messgae: err
            }))
    },


    // get a particular reviewer reviews 
    getPersonReviews(req, res) {
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
    }
}