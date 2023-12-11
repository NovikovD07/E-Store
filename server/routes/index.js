const Router = require('express');
const router = new Router();
const brandRouter = require('./brandRouter');
const deviceRouter = require('./deviceRouter');
const typeRouter = require('./typeRouter');
const userRouter = require('./userRouter');
const checkRole = require('../middleware/checkRoleMiddleware')


router.use('/brand',checkRole('ADMIN'), brandRouter);
router.use('/device',checkRole('ADMIN'), deviceRouter);
router.use('/type', typeRouter);
router.use('/user', userRouter);

module.exports = router;
