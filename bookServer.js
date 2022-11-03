'use strict';

const http = require('http');

const {port, host} = require('./config.json');

const storage = require('./bookStorage');

const server = http.createServer((req, res) => {
    const {
        pathname,
        searchParams
    } = new URL(`http://${req.headers.host}${req.url}`);

    let resultHtml = '';


    if (pathname === '/books') {
        resultHtml =createCarsHtml(JSON.stringify(storage.getAllBooks()));
    }
    else if(pathname==='/cartypes'){
        resultHtml = createCarsHtml(JSON.stringify(storage.getTitle()));
    }
    else{
        res.end();
    }

    res.writeHead(200, {
        'Content-Type':'text/html; charset= utf-8'
    });
    res.end(resultHtml);
});

server.listen(port,host, () => console.log(`Server on ${host}:${port} is running...`));

function createCarsHtml(carArray){
    return `<pre>${carArray}</pre>`;
}