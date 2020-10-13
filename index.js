const http = require('http');
const path = require('path');
const express = require('express');

const app = express();


const server = http.createServer((request,response)=>{
  response.writeHead(200,{'content-type':'application/json'})  

   
})

server.listen(3000, ()=>{
    console.log('server listening on port 3000 ')
})