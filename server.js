require('dotenv').config()
let express = require('express');

const server = express();

server.get('/test', (req,res) => {
  res.json({message:"Testing"})
})


module.exports = server;
