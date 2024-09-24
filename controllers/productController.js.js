const Product = require('../models/Product');

// Fetch all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch products by category
exports.getProductsByCategory = async (req, res) => {
  const category = req.params.category;
  try {
    const products = await Product.find({ category });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


