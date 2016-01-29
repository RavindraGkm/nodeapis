var express = require('express');
const port_no = 3000;
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/', function (req, res) {
  res.send('Got a POST request');
});

app.put('/', function (req, res) {
  res.send('Got a PUT request at /user');
});

app.listen(port_no, function () {
  console.log('Example app listening on port 3000!');
});
