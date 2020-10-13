const http = require('http');
const server = http.createServer((request,response)=>{
  response.writeHead(200,{'content-type':'text/plain'})  

   
})

server.listen(3000, ()=>{
    console.log('server listening on port 3000 ')
})