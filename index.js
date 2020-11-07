const express = require('express');
require('dotenv').config();
const path=require('path');

//App Express

const app=express();


//Node Server
const server=require('http').createServer(app);
module.exports.io=require('socket.io')(server);
require("./sockets/socket");

//Path publico
const publicpath=path.resolve( __dirname, 'public' );

app.use(express.static(publicpath))




server.listen(process.env.PORT,(err)=>{
    if(err) throw new Error(err)
    console.log(`Servidor corriendo en puerto`,process.env.PORT);
});