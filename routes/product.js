const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/all', ctrl.product.getAll);

module.exports = router;