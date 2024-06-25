var express = require('express');
var categoryController = require('../controllers/categoryController');
var { authenticate, authorize } = require('../middleware/authMiddleware');

var router = express.Router();

router.post('/',categoryController.createCategory);
router.get('/',authenticate, authorize(['admin']), categoryController.getCategories);
router.get('/:id',authenticate, authorize(['admin']), categoryController.getCategoryById);
router.put('/:id',authenticate, authorize(['admin']), categoryController.updateCategory);
router.delete('/:id',authenticate, authorize(['admin']), categoryController.deleteCategory);

module.exports = router;
