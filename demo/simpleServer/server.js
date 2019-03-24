const http = require('http');
const uuid = require('uuid');

let cache = {};

const server = http.createServer((req, res) => {
    cache[uuid()] = new Array(10000).fill('xxxx');
    res.end(JSON.stringify({
        errno: 0,
        errmsg: 'ok'
    }));
});

server.listen(3000);
console.log('Server listening to port 3000. Press Ctrl+C to stop it.');