const express = require('express');
const helmet = require('helmet'); 

//initialize server
const server = express();

//connecting middleware to server
server.use(helmet());
server.use(express.json())

module.exports = server;
