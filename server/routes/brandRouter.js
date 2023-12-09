const Router = require('express');
const router = new Router();
const BrandController = require('../controllers/brandController');
const brandController = require('../controllers/brandController');

router.post('/', brandController.create);
router.get('/', brandController.getAll);
// router.delete('/:brandId')

module.exports = router;
