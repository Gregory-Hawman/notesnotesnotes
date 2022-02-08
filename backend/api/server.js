const express = require('express');
const cors = require('cors')

const server = express();
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.json({ message: 'Server is up and running'})
})

module.exports = server;