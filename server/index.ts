declare var require: any

const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)

import { Server } from 'socket.io'

const io = new Server(server, {
    cors: {
        origin: '*'
    }
})

io.on('connection', (socket) => {
    socket.on('send-message', () => {
        socket.broadcast.emit('fetch-messages')
    })
})

server.listen(3001, () => {
    console.log('Server listening on localhost:3001')
})