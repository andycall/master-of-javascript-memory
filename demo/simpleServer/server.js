const http = require('http');
const uuid = require('uuid');

function readDataFromDataBase() {
    let cache = {};
    return function(key) {
        if (cache[key]) {
            return cache[key];
        }

        let data = new Array(10000).fill('xxxx');
        cache[key] = data;
        return data;
    };
}

const cachedDataBase = readDataFromDataBase();

const server = http.createServer((req, res) => {
    let key = uuid();
    let data = cachedDataBase(key);
    res.end(JSON.stringify({
        data: data
    }));
});

server.listen(3000);
console.log('Server listening to port 3000. Press Ctrl+C to stop it.');