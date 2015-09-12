/**
 * Created by buggy on 9/11/15.
 */
var express = require('express');
var app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(3000);
var io = require('socket.io').listen(server);

io.sockets.on('connect', function (socket) {
    console.log(socket.id);
});

console.log('Server is running at port 3000');