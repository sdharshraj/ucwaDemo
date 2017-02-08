'use strict'

const http = require('http');
const express = require('express');
const fs = require('fs');

//const serverConfig = fs.readFileSync('./config.json');

fs.readFile('./config.json', 'utf8', function (err, data) {

    const config = JSON.parse(data);

    const app = express();

    app.use(express.static(config.webServer.filePath));

    const server = http.createServer(app);

    server.listen(config.webServer.port, function (err) {
        if (err) {
            console.log('Error occured: ' + err.message)
        }
        console.log(`Server is listening on ${config.webServer.port}`);
    })
})

console.log('Reading configuration from file.');

