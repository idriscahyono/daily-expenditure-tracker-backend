const router = require('express').Router()
const CategoryController = require('./CategoryController')

router.get('/', CategoryController.index)
router.get('/:id', CategoryController.show)
router.post('/', CategoryController.store)
router.put('/:id', CategoryController.update)
router.delete('/:id', CategoryController.destroy)

module.exports = router