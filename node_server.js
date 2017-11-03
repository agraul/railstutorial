const WebSocket= require('ws');
const http = require('http');

const server = http.createServer();
const wss = new WebSocket.Server({ server: server, path: '/' });

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

wss.on('connection', function(ws) {
  var ipAddress = ws._socket.remoteAddress;
  connText = 'Client with ' + ipAddress + ' connected'
  console.log(connText);


    ws.on('message', function(msg) {
      console.log(msg);
      // parse msg and build fmsg which gets broadcasted to all
      var msgContent = JSON.parse(msg);

      fmsg = msgContent.client + " at "+ msgContent.date
      + " wrote: " + msgContent.text;
      wss.broadcast(fmsg);
    });
});

server.listen(8080);
console.log('Started server');
