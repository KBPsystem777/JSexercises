//Require Express
const express = require('express');
const app = express();

//Change this for port#
const port = 3000;

//Setting up the static fodlers
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

//Establish Server Connection
const server = app.listen(port);
console.log(`App running on https://localhost:${port}`);

//On Server run, serve the index.html file
app.get('/', (req, res) => {
    res.sendFile('index.html');
});
