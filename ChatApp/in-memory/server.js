var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//In-memory array to store chat history
var messages = [
    {name: 'ChatBot', message: 'Welcome to the chat room! :)'},
]

app.get('/messages', (req, res) =>{
    res.send(messages)
})

app.post('/messages', (req, res) =>{
    messages.push(req.body)
    io.emit('message', req.body)
    res.sendStatus(200)
})

io.on('connection', (socket) => {
    console.log('a user connected')
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
})

var server = http.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
})