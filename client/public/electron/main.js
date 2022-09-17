const { app, BrowserWindow } = require("electron");
const { initIpcMainListeners } = require("./listerners");

const path = require("path");
const isDev = require("electron-is-dev");

require("@electron/remote/main").initialize();

process.env.NODE_ENV = "prod";

let win = null;
function createWindow() {
	win = new BrowserWindow({
		icon: path.join(__dirname, "../../src/assets/images/Logo-64x64.png"),
		width: 		400,
		minWidth: 	400,
		height: 	526,
		minHeight: 	526,
		resizable: false,
		backgroundColor: "#000",
		show: false,
		frame: false,
		webPreferences: {
			nodeIntegration: true,
			preload: path.join(__dirname, "preload.js"),
			enableRemoteModule: true,
		},
	});

	win.setMenu(null);

	win.loadURL(
		isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../../build/index.html")}`
	);

	if (process.env.NODE_ENV === "dev") {
		win.webContents.openDevTools();
	}

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
