var Mongoose = require('mongoose');

var shoppingListSchema = new Mongoose.Schema({
  created: Date,
  completed: Date,
  items: [{type: Mongoose.Schema.Types.ObjectId, ref: 'ShoppingListItem'}]
});

module.exports = Mongoose.model('ShoppingList', shoppingListSchema);
