const express = require('express');
const bodyParser = require('body-parser');
const net = require('net');

const routes = require('./routes/index');

const webserverhost = '0.0.0.0';
const webserverport = 8080;

const tcpserverhost = '0.0.0.0';
const tcpserverport = 3000;

var webserver = express();

webserver.use(bodyParser.json({ type: 'application/json' }));
webserver.use('/', routes);

// catch 404 and forward to error handler
webserver.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

webserver.listen(webserverport, webserverhost);
console.log(`Running on http://${webserverhost}:${webserverport}`);

// tcp server
function tcpserverHandler(socket) {
  socket.name = socket.remoteAddress + ":" + socket.remotePort;
  console.log(socket.name);
  
  socket.on('data', (data) => {
    console.log('Tcp Server data', data);
    var textdata = data.toString();
    console.log(`Tcp Server data ${textdata}`);
    socket.write('You said "' + data + '"');
  });

  socket.on('end', () => {
    console.log('Tcp Server end');
  });
  
  socket.on('error', (error) => {
    console.log('Tcp Server error', error);
  });
};

net.createServer(tcpserverHandler).listen(tcpserverport, tcpserverhost);
console.log(`Running on ${tcpserverhost}:${tcpserverport}`);

