var Config = require('../.env.json'),
    Promise = require('bluebird'),
    Twilio = require('twilio')(Config.twilio.sid, Config.twilio.token),
    service = {};

Twilio.messages = Promise.promisifyAll(Twilio.messages);

service.requestProductInformation = function (upc) {
  Twilio.messages.create({
    to: Config.twilio.number.to,
    from: Config.twilio.number.from,
    body: "Enter the product name for " + upc
  }).then(function (message) {
    console.log('message', message);
  }).catch(function (error) {
    console.log('error sending message', error);
  });
};

service.receiveProductInformation = function (information) {
  console.log('received', information);
};

module.exports = service;
