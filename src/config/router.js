const router = require('express').Router()

router.use('/expenditure', require('../api/expenditure/ExpenditureRouter'))
module.exports = router