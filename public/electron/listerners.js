const {SentimentAnalyzer} = require("./SentimentAnalyzer.js");

const { ipcMain } = require("electron");

let win = null;
let sentimentAnalyzer = null
function initIpcMainListeners(window) {
	win = window;
	sentimentAnalyzer = new SentimentAnalyzer();

	ipcMain.on("say-hello", () => {
		console.log("hello");
	});

	ipcMain.on("close-window", () => {
		win.close();
	});

	ipcMain.on("set-size", (event, { width, height, recenter }) => {
		if ((width === win.getSize()[0]) && (height === win.getSize()[1])) return;

		win.hide();
		win.setSize(width, height);
		win.setMinimumSize(width, height);

		if (recenter) win.center();
		setTimeout(() => win.show(), 50);
	});

	ipcMain.on("start-listening", () => {
		console.log("start listening");
		sentimentAnalyzer.startListening();
	});

	ipcMain.on("stop-listening", () => {
		console.log("stop listening");
		sentimentAnalyzer.stopListening();
	});
}
module.exports = { initIpcMainListeners };
