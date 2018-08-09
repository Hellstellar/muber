const router = require('express').Router();
const DriverController = require('../controllers/drivers_controller')

router.get('/', DriverController.greeting)

router.post('/drivers', DriverController.create)

router.put('/drivers/:id', DriverController.edit)

router.delete('/drivers/:id', DriverController.remove)

module.exports = router;