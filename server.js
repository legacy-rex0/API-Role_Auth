const dotenv = require('dotenv')
dotenv.config()
const http = require('http');
const app  = require('./app');

const server = http.createServer(app);
const Port = process.env.Port || 4343;

server.listen(4343, (req, res) => {
    console.log(`Server connecting to Port: ${Port}`)
})
