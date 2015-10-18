var Mongoose = require('mongoose');

var productSchema = new Mongoose.Schema({
  _id: Number,
  upc: String,
  name: String
});

module.exports = Mongoose.model('Product', productSchema);
