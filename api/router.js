const router = require('express').Router();
const userRouter = require('./routers/userRouter');

router.use('/user', userRouter);
router.use('/admin', adminRouter);


module.exports = router;