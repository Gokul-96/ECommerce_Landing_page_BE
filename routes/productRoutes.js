const express = require('express');

const { getProducts, getProductsByCategory, createProduct,  updateProduct, deleteProduct } = require('../controllers/productController.js');
const router = express.Router();

router.put('/:id', updateProduct); //update
router.post('/', createProduct); //create

router.get('/', getProducts); //get all product
router.get('/category/:category', getProductsByCategory);
// When a client sends a GET request to this URL the getProductsByCategory function is invoked. It retrieves the category from the URL and fetches all products that belong to that category and same as getproducts

router.delete('/:id', deleteProduct); //delete
module.exports = router;
