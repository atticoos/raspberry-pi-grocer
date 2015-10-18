var Mongoose = require('mongoose');

var shoppingListSchema = new Mongoose.Schema({
  _id: Number,
  completed: Date,
  items: [{type: Mongoose.Schema.Types.ObjectId, ref: 'ShoppingListItem'}]
});

module.exports = Mongoose.model('ShoppingList', shoppingListSchema);
