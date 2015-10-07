var restify = require('restify'),
    ProductVerificationService = require('./product-verification-service'),
    server = restify.createServer(),
    service = {};


server.post('/twilio', twilioHandler);

function twilioHandler (req, res, next) {
  ProductVerificationService.receiveProductInformation(req.body);
  res.status(200).send();
  next();
}

service.start = function () {
  server.listen(6546);
};

module.exports = service;
