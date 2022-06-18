const { ipcMain, dialog } = require("electron");

let win = null;
function initIpcMainListeners(window) {
	win = window;

	ipcMain.on("say-hello", () => {
		console.log("hello");
	});

}

module.exports = { initIpcMainListeners };
