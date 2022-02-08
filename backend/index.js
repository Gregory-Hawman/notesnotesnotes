require('dotenv').config();
const server = require('./api/server');
const { PORT } = require('./api/config');

server.listen(PORT, () => {
    console.log(`\n === Server listeing on port ${PORT} === \n`);
});