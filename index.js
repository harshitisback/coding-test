const http = require("http");
const projects = require('./data-store.js');
const url = require('url');
const express = require('express');


const app = express();

const host = 'localhost';
const port = 8000;




console.log(projects.get());



const requestListener = function (req, res) {


    let requestedUrl = req.url;
    console.log(requestedUrl);
    // res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    // res.end(`{"message": "This is a JSON response"}`);

    if (req.url == "/") {
        
        res.end("hello harshit this side");
    } else if (req.url == "/project") {
        res.writeHead(400);
        res.end(`{"message": "BAD REQUEST"}`);



    } else if (req.url == "/project/1") {

        // res.writeHead(200);


        let data = JSON.parse(projects.get());

        let data1 = data[0];


        res.end(JSON.stringify(data1));
    } else if(req.url == "/project/2"){
        let data = JSON.parse(projects.get());

        let data1 = data[1];


        res.end(JSON.stringify(data1));

    }else if(req.url == "/project/3"){
        let data = JSON.parse(projects.get());

        let data1 = data[2];


        res.end(JSON.stringify(data1));

    }

    else {
        res.writeHead(404, { "Content-Type": "txt/html" });
        res.end("404 error ");
    }


};







const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

