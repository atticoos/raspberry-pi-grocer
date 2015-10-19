var Mongoose = require('mongoose');

var productSchema = new Mongoose.Schema({
  upc: String,
  name: String
});

module.exports = Mongoose.model('Product', productSchema);
