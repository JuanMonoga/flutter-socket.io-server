const express = require('express');
const path = require('path');
require('dotenv').config();

//App de Express
const app = express();

//Sevidor Node
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);

require('./sockets/sokect');

//Path Publico
const publicPath = path.resolve( __dirname,'public');
app.use(express.static(publicPath));

server.listen(process.env.PORT,(err) => {
    if (err) throw new Error(err);
    console.log('Laura te amo <3', process.env.PORT)
}); 