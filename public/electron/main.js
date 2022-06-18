const { app, BrowserWindow } = require("electron");
const { initIpcMainListeners } = require("./listerners");

const path = require("path");
const isDev = require("electron-is-dev");

require("@electron/remote/main").initialize();

let win = null;
function createWindow() {
	win = new BrowserWindow({
		width: 1024,
		minWidth: 1000,
		height: 720,
		minHeight: 660,
		backgroundColor: "#000",
		show: false,
		webPreferences: {
			nodeIntegration: true,
			preload: path.join(__dirname, "preload.js"),
			enableRemoteModule: true,
		},
	});

	//win.setMenu(null);

	win.loadURL(
		isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../../build/index.html")}`
	);

	win.once("ready-to-show", () => {
		win.show();
		win.focus();
	});

	return win;
}

app.on("ready", () => {
	createWindow();
	initIpcMainListeners(win);
});

app.on("window-all-closed", function () {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", function () {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
		initIpcMainListeners(win);
	}
});
