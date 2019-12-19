const router = require('express').Router()
const ExpenditureController = require('./ExpenditureController')

router.get('/currentMonth', ExpenditureController.currentMonth)
router.get('/currentMonthCategory', ExpenditureController.currentMonthCategory)
router.get('/', ExpenditureController.index)
router.get('/:id', ExpenditureController.show)
router.post('/', ExpenditureController.store)
router.put('/:id', ExpenditureController.update)
router.delete('/:id', ExpenditureController.destroy)


module.exports = router