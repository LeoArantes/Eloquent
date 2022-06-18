const { ipcMain } = require("electron");

let win = null;
function initIpcMainListeners(window) {
	win = window;

	ipcMain.on("say-hello", () => {
		console.log("hello");
	});

	ipcMain.on("close-window", () => {
		win.close();
	});

	ipcMain.on("set-size", (event, { width, height, recenter }) => {
		win.setSize(width, height);
		win.setMinimumSize(width, height);

		if (recenter) win.center();
	});
}

module.exports = { initIpcMainListeners };
