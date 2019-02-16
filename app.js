var express = require('express');
var path = require('path');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + '/')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
})
var port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`))