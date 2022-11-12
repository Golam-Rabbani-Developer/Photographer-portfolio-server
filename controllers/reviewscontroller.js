const Reviews = require("../models/reviewsmodel");
const Services = require("../models/servicesmodels");

module.exports = {

    // send a reviews 
    sendReviews(req, res) {
        let { name, description, email, picture, author, id } = req.body;

        // creating a review 
        const review = new Reviews({
            name, description, picture, email, author: [], productid: id
        })

        // saving the review 
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



    // edit a particular review 
    editReview(req, res) {
        let { id } = req.params;
        let { name, description, email, picture, author } = req.body;

        // checking the review 
        Reviews.find({ _id: id })
            .then(prevreview => {

                // creting  update the review 
                const review = {
                    name,
                    description,
                    email,
                    picture, author: [],
                    productid: prevreview.productid
                }

                // updating the review 
                Reviews.findByIdAndUpdate(id, { $set: review }, { new: true })
                    .then(review => {
                        if (review) {
                            res.status(200).json({
                                review
                            })
                        }
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))


    },



    // get a particular Product review 
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