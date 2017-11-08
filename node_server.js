const WebSocket= require('ws');
const http = require('http');

const server = http.createServer();
const wss = new WebSocket.Server({ server: server, path: '/' });

var messageArray = [];

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
  messageArray.forEach(function(item, index, array) {
    ws.send(item);
  });



    ws.on('message', function(msg) {
      console.log(msg);
      var msgContent = JSON.parse(msg);

      if (msgContent.text === "") {
        return;
      }

      fmsg = msgContent.date + " - " + msgContent.client
        + " : " + msgContent.text;
      messageArray.push(fmsg);
      wss.broadcast(fmsg);
    });
});

server.listen(8080);
console.log('Started server');
