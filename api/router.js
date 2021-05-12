const router = require('express').Router();
const userRouter = require('./routers/userRouter');
const adminRouter = require('./routers/adminRouter')

router.use('/user', userRouter);
router.use('/admin', adminRouter);

module.exports = router;