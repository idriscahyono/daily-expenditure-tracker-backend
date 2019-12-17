const router = require('express').Router()

router.use('/expenditure', require('../api/expenditure/ExpenditureRouter'))
router.use('/category', require('../api/category/CategoryRouter'))
module.exports = router