var restify = require('restify'),
    // ProductVerificationService = require('./product-verification-service'),
    server = restify.createServer(),
    service = {};

server.use(restify.bodyParser({mapParams: false}));
server.post('/twilio', twilioHandler);

function twilioHandler (req, res, next) {
  console.log('received  sms', req.body);
  // ProductVerificationService.receiveProductInformation(req.body);
  res.status(200);
  res.send();
  next();
}

server.listen(6546);
