var express = require('express');
var path = require('path');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + '/public')));

var port = 3000;
app.listen(port, () => console.log(`DEV Listening on port ${port}!`))