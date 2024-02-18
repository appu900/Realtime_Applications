const express = require('express')
const http = require('http');
const soketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = soketio(server);

app.use('/',express.static(__dirname + '/public'));

io.on('connection',(socket) => {
    console.log("a user connected", socket.id);
    socket.on('from_client',() => {
        console.log('received event from client');
    })
    setInterval(() =>{
        socket.emit('from_server',Math.random());
    },2000)
})

server.listen(5000,()=>{
    console.log('Server is running on port 5000');
}) 