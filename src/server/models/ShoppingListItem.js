var Mongoose = require('mongoose');

var shoppingListItemSchema = new Mongoose.Schema({
  _id: Number,
  upc: String,
  name: String
});

module.exports = Mongoose.model('ShoppingListItem', shoppingListItemSchema);
