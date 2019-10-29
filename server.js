require('dotenv').config()
let express = require('express');

const server = express();

server.get('/test', (req,res) => {
  res.json({message:"Testing"})
})

server.get('/test2', (req,res) => {
  res.json({message:"testing2"})
})

module.exports = server;
