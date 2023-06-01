const http = require('http');
const fs = require('fs');
const htmlfile1 = fs.readFileSync('tut20-navigation_bar.html');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(htmlfile1);
})

const port = 80;

server.listen(port, '127.0.0.1', () => {
    console.log(`listening on port ${port}`)
});