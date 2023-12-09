const Router = require('express');
const router = new Router();
const DeviceController = require('../controllers/deviceController');
const deviceController = require('../controllers/deviceController');

router.post('/', deviceController.create);
router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getOne);
// router.delete('/:brandId')

module.exports = router;
