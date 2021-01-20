const express = require('express'); // like a PHP require
const path = require('path');

const server = express();



//set your views directory
server.set("views", path.join(__dirname, 'views'));
// set the static assets director so express knows where to look
// for css, js files, images et - anything static
server.use(express.static(path.join(__dirname, "public")));

server.get("/", (req, res) => {
    console.log('you hit the home route');
    res.sendFile(path.join(__dirname, 'views/index.html')); // localhost:3000/views/index.html
})

server.get("/contact", (req, res) => {
    console.log('hit the contact route');
    res.sendFile(path.join(__dirname, 'views/contact.html'));
})

const port = process.env.PORT || 3000; //localhost:3000

server.listen(port, () => {
    console.log(`Server running at ${port}/`); // kinda like an echo statement
});