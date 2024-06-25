var express = require('express');
var { authenticate, authorize } = require('../middleware/authMiddleware');
var customerController = require('../controllers/customerController');

router.post('/', customerController.createCustomer);
router.get('/', authenticate, authorize(['admin']), customerController.getCustomers);
router.get('/:id', authenticate, authorize(['admin']), customerController.getCustomerById);
router.put('/:id', authenticate, authorize(['admin']), customerController.updateCustomer);
router.delete('/:id', authenticate, authorize(['admin']), customerController.deleteCustomer);

module.exports = router;
