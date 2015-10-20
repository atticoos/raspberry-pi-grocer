var restify = require('restify'),
    mongoose = require('mongoose'),
    Config = require('../../.env.json'),
    ShoppingList = require('./models/ShoppingList'),
    ShoppingListItem = require('./models/ShoppingListItem'),
    Product = require('./models/Product'),
    UPCService = require('./services/upc-service'),
    TwilioService = require('./services/twilio-service'),
    // ProductVerificationService = require('./product-verification-service'),
    server = restify.createServer(),
    service = {};

mongoose.Promise = require('bluebird');
mongoose.connect(Config.mongo);

server.use(restify.bodyParser({mapParams: false}));
server.post('/twilio', twilioHandler);
server.get('/lists', listsHandler);
server.get('/lists/:id', listHandler);
server.post('/scan', scanHandler);


function twilioHandler (req, res, next) {
  var twilioRequest = req.body;
  if (twilioRequest && twilioRequest.Body) {

  }

  console.log('received  sms', req.body);

  // ProductVerificationService.receiveProductInformation(req.body);
  res.status(200);
  res.send();
  next();
}

function listsHandler (req, res) {
  ShoppingList
  .find()
  .populate('items')
  .exec()
  .then(function (data) {
    res.send(data);
  });
}
function listHandler () {

}
function scanHandler (req, res) {
  Product.find({upc: req.body.upc}).then(function (products) {
    if (!products || products.length === 0) {
      throw new Error('not found');
    }
    return ShoppingService.addToCurrentList(products[0]);
  });
  UPCService.getProductByUpc(req.body.upc).catch(function () {
    TwilioService.requestProductInformation(req.body.upc);
    throw new Error('no product found');
  }).then(function (product) {
    return ProductService.addToCurrentList({
      upc: req.body.upc,
      name: product.itemname || product.description
    });
  }).catch(function (error) {
    res.send('Deferring product to manual entry');
  })
  return;
  ShoppingList.find({completed: null}).then(function (lists) {
    var item = ShoppingListItem({
          upc: 12345,
          name: 'foobar'
        }),
        list;
    if (!lists || lists.length === 0) {
      list = ShoppingList();
    } else {
      list = lists[0];
    }
    return [list, item.save()];
  }).spread(function (list, item) {
    list.items.push(item);
    return list.save();
  }).then(function (list) {
    res.send(list);
  }).catch(function (error) {
    res.status(400);
    res.send(error);
  });
}

server.listen(6546);
