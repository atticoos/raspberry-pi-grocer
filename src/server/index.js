var restify = require('restify'),
    // ProductVerificationService = require('./product-verification-service'),
    server = restify.createServer(),
    service = {};


server.post('/twilio', twilioHandler);

function twilioHandler (req, res, next) {
  console.log('received  sms', req.body);
  // ProductVerificationService.receiveProductInformation(req.body);
  res.status(200).send();
  next();
}

server.listen(6546);
