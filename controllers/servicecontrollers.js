const Services = require('../models/servicesmodels')



module.exports = {

    // send a individual service to the database 
    sendServices(req, res) {
        let { name, description, picture, reviews } = req.body;


        const service = new Services({
            name, description, picture, reviews: []
        })

        service.save()
            .then(savedService => {
                res.status(200).json({
                    service: savedService,
                })
            })
            .catch(err => res.status(400).json({
                message: err
            }))
    },


    // get only 3 service
    getService(req, res) {
        Services.find({}, null, { limit: 3 })
            .then(services => {
                if (services) {
                    res.status(200).json({
                        services
                    })
                }
            })
            .catch(err => console.log(err))
    },



    // get all services from the database 
    getAllServices(req, res) {
        Services.find({})
            .then(services => {
                if (services) {
                    res.status(200).json({
                        services
                    })
                }
            })
            .catch(err => res.status(400).json({
                message: err
            }))
    },





    //get A single Service 
    getSingleService(req, res) {
        const { id } = req.params;
        Services.find({ _id: id })
            .then(service => {
                if (service) {
                    res.status(200).json({
                        service
                    })
                } else {
                    res.status(200).json({
                        message: "No Data Found"
                    })
                }
            })
            .catch(err => res.status(400).json({
                message: err
            }))
    }

}