// var ProductService = require('./product-service');
// var ProductVerificationService = require('./product-verification-service');
var request = require('request');
function Scanner () {}

Scanner.prototype.onScanned = function (data) {
  var upc = data.toString();
  request({
    method: 'POST',
    uri: 'http://127.0.0.1:6546/scan',
    body: {
      upc: data.toString()
    },
    json: true
  });
  return;


  // ProductService.getProductByUpc(upc).then(function (product) {
  //   console.log('product', product);
  // }).catch(function () {
  //   ProductVerificationService.requestProductInformation(upc);
  //   console.log('could not find', upc);
  // });
};

Scanner.prototype.scan = function () {
  process.stdin.on('data', this.onScanned.bind(this));
};

module.exports = Scanner;
