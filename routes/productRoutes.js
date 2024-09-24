const express = require('express');
const { getProducts, getProductsByCategory } = require('../controllers/productController.js');
const router = express.Router();

router.get('/', getProducts);
router.get('/category/:category', getProductsByCategory);

module.exports = router;
