const express = require('express');
const net = require('net');
const fs = require('fs');

const webserverhost = 'localhost';
const webserverport = 80;
const webserver = express();

const tcpserverhost = 'localhost';
const tcpserverport = 3000;

var filelivelist = fs.readFileSync("livelist.json");
var jsonlivelist = JSON.parse(filelivelist);

// host
webserver.get('/', (req, res) => {
  res.send('use ' + webserverhost + ':' + webserverport + '/api/livelist');
});

// /api/livelist
webserver.route('/api/livelist').get((req, res) => {
  console.log('Call to: /api/livelist');
  res.setHeader('Content-Type', 'application/json');
  res.send(jsonlivelist);
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
