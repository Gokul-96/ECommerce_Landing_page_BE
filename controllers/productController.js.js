const Product = require('../models/Product');

// Fetch all products

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products); //json object contain all products sends res to client
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


// Create a new product
exports.createProduct = async (req, res) => {
  const { name, category, price, image, description, quantity } = req.body;
  try {
    const newProduct = new Product({ name, category, price, image, description, quantity });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, category, price, image, description, quantity } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, category, price, image, description, quantity },
      { new: true } // This returns the updated product
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};