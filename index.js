var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 8080});
var CLIENTS = [];

wss.on('connection', function(ws) {
    CLIENTS.push(ws);
    console.log("Client Connected");
    ws.on('message', function(message) {
        console.log(message);
        if (message === 'hello') {
            sendAll('NEW USER');
        };

    });

    ws.on('close', function(client) {
        CLIENTS.splice(CLIENTS.indexOf(client), 1);
        console.log("Client Disconnected");
    });

    ws.on('error', function(client) {
        CLIENTS.splice(CLIENTS.indexOf(client), 1);
    });
});

function sendAll(message) {
    for(var i = 0; i < CLIENTS.length; i++) {
        if(CLIENTS[i].readyState == CLIENTS[0].OPEN) {
            CLIENTS[i].send(message);
        }
    }
}
