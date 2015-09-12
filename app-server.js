/**
 * Created by buggy on 9/11/15.
 */
var express = require('express');
var app = express();

var title = 'Untitled Presentation';
var connections = [];

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(3000);
var io = require('socket.io').listen(server);

io.sockets.on('connect', function (socket) {

    socket.once('disconnect', function () {
        connections.splice(connections.indexOf(socket), 1); // remove the socket information from the connections array
        socket.disconnect(); // manually disconnect
        console.log('Disconnected: %s sockets remaining', connections.length);
    });

    socket.emit('welcome', {title: title});

    connections.push(socket);
    console.log('Connected: %s Total Sockets: %s', socket.id, connections.length);
});

console.log('Server is running at port 3000');