// Imports all the modules needed
const net = require('net');

var tcpserver = net.createServer(tcpserverHandler);

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

module.exports = tcpserver;