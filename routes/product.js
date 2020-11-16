const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/all', ctrl.product.getAll);
router.get('/:product', ctrl.product.getProductById);

module.exports = router;