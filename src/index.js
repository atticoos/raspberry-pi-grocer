var Scanner = require('./scanner'),
    Server = require('./server'),
    scanner = new Scanner();


Server.start();
scanner.scan();
