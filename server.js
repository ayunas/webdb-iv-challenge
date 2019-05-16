const express = require('express');
const bodyParser = express.json();

const server = express();

server.get('/', (req,res) => {
    res.send(`<h2> Welcome to the Recipe Cook Book! </h2>`)
});


module.exports = server;