const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");
const cors = require('cors');

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on("disconnecting", () => {
		console.log(socket.rooms);
	});

    socket.on("join", (room) => {
		console.log(`Socket ${socket.id} joining ${room}`);
		socket.join(room);
	});

    socket.on("leave", (room) => {
        console.log(`Socket ${socket.id} leaving ${room}`);
        socket.leave(room);
    });


	socket.on("chat", ({ message, room }) => {
		console.log(`msg: ${message}, room: ${room}`);
        console.log(message);
		io.to(room).emit("chat", message);
	});

	socket.on("transcription", ({ message, room }) => {
		console.log(`msg: ${message}, room: ${room}`);
        console.log(message);
		io.to(room).emit("transcription", message);
	});
});

server.listen(3001, () => {
    console.log('listening on *:3001');
});
