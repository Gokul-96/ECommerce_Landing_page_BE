const mongoose = require('mongoose');

//new schema object creation using new monggose.schema
const productSchema = new mongoose.Schema({
  // id: { type: Number, required: true},
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String },
  quantity: { type: Number, required: true }
});

//Based on schema create a model
//product - with this name mongoose authomatically create MongoDB Collection
//productSchema - above schema given here for structure of documents
const Product = mongoose.model('Product', productSchema);
module.exports = Product;