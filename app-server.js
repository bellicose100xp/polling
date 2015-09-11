/**
 * Created by buggy on 9/11/15.
 */
var express = require('express');
var app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

app.listen(3000);

console.log('Server is running at port 3000');