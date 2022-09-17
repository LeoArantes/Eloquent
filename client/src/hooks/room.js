import io from "socket.io-client";

let socket = io("http://localhost:3001");
let roomCode = "";

export const joinRoom = (room) => {
    roomCode = room;
    socket.emit("join", room);
}

export const sendMessage = (message) => {
    socket.emit("chat", { message, room: roomCode });
};

export const receiveMessage = (callback) => {
    socket.on("chat", (message) => {
        callback(message);
    });
}
