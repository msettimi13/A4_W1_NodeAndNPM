const http = require('http'); // like a PHP require

// require is more or less the same as a JS import

// const hostname = '127.0.0.1'; //this is local host
const port = process.env.PORT || 3000; //localhost:3000

const server = http.createServer((req, res) => { //req means request res is response
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hi World');
});

server.listen(port, () => {
    console.log(`Server running at ${port}/`); // kinda like an echo statement
});