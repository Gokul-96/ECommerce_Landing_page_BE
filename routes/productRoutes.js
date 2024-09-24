const express = require('express');

const { getProducts, getProductsByCategory } = require('../controllers/productController.js');
const router = express.Router();

router.get('/', getProducts);
router.get('/category/:category', getProductsByCategory);
// When a client sends a GET request to this URL the getProductsByCategory function is invoked. It retrieves the category from the URL and fetches all products that belong to that category and same as getproducts
module.exports = router;
