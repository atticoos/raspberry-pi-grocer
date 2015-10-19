var Mongoose = require('mongoose');

var shoppingListItemSchema = new Mongoose.Schema({
  upc: String,
  name: String
});

module.exports = Mongoose.model('ShoppingListItem', shoppingListItemSchema);
