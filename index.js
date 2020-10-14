const path = require('path');
const express = require('express');

const app = express();


require('dotenv').config();
const morgan = require('morgan');
app.use(morgan('dev'))
// app.use(express.json());
// app.use(express.urlencoded({
//   extended: false
// }))
const routesToCreate = require('./routes/routesToCreate.js')
const games = require('./models/games.js')

const port = process.env.PORT || 3000;

// const server = http.createServer((request,response)=>{
//   response.writeHead(200,{'content-type':'application/json'})  



app.use('/api/v1/games', routesToCreate);
   
// })
app.get('/',(req,res)=>{
    res.status(200).json({confirmation:'success',games })
})

 
app.listen(port, ()=>{
    console.log(`server listening on port ${port}`)
})