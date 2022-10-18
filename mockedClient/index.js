// Mocked client to perform the same actions as the real client
// connected to the real server to send and receive messages

const io = require("socket.io-client");

let socket = io("http://localhost:3001");

socket.emit("join", "123");

socket.on("connect", () => {
	console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

socket.on("disconnect", () => {
	console.log(socket.id); // undefined
});

socket.on("chat", (msg) => {
    console.log("MESSAGE RECEIVED:");
    console.log(msg);
});

setInterval(() => {
    var current = new Date();
    String(current.getMinutes()).padStart(2, "0");
    var time =
        String(current.getHours()).padStart(2, "0") +
        ":" +
        String(current.getMinutes()).padStart(2, "0") +
        ":" +
        String(current.getSeconds()).padStart(2, "0") +
        "." +
        String(current.getMilliseconds()).padStart(3, "0");
        socket.emit("chat", {
            message: {
                message: "MOCK: Hello from the client",
                sender: "MOCK",
                time: time,
            },
            room: "123",
        });
}, 5000);
