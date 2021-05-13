const router = require('express').Router();
const userRouter = require('./routers/userRouter');
const productRouter = require('./routers/productRouter')

router.use('/user', userRouter);
router.use('/product', productRouter);

module.exports = router;