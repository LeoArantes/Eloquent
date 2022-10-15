import io from "socket.io-client";

let socket = io("http://localhost:3001");
let roomCode = "";

export const joinRoom = (room) => {
    roomCode = room;
    socket.emit("join", room);
}

export const getSocket = () => {
    return socket;
}

export const getRoomCode = () => {
    return roomCode;
}
