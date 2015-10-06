var ProductService = require('./product-service');
var ProductVerificationService = require('./product-verification-service');

function Scanner () {}

Scanner.prototype.onScanned = function (data) {
  var upc = data.toString();
  ProductService.getProductByUpc(upc).then(function (product) {
    console.log('product', product);
  }).catch(function () {
    ProductVerificationService.requestProductInformation(upc);
    console.log('could not find', upc);
  });
};

Scanner.prototype.scan = function () {
  process.stdin.on('data', this.onScanned.bind(this));
};

module.exports = Scanner;
