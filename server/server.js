const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const server = require('http').Server(app);
const port = process.env.PORT || 8000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../'));

server.listen(port);
console.log(`Server is running on ' + ${port}`);

module.exports = app;
