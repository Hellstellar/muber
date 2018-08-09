const Driver = require('../models/driver')

module.exports = {
    greeting(req, res) {
        res.send({ hi: 'there'})
    },

    create(req, res, next) {
        const driverProps = req.body;
        Driver.create(driverProps)
                .then(driver => {
                    res.json(driver)
                })
                .catch(next)
    },
    
    edit(req, res, next) {
        const DriverId = req.params.id;
        const editProps = req.body;

        Driver.findByIdAndUpdate(DriverId, editProps)
                .then(() => Driver.findById(DriverId))
                .then(driver => res.json(driver))
                .catch(next)
    },

    remove(req, res, next) {
        const DriverId = req.params.id;
        
        Driver.findByIdAndRemove(DriverId)
                .then(driver => res.status(204).send(driver))
                .catch(next)
    }
}