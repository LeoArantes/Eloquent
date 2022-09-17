const { BrowserWindow } = require("electron");
const child_process = require("child_process");

class SentimentAnalyzer {
	constructor() {
		this.child = null;
	}

	startListening() {
		this.child = child_process.spawn("python", ["-u", "./public/python/EmotionAnalyzer.py"]);

		this.child.stdout.on("data", (data) => {
			//console.log(data.toString());
			let currentWindow = BrowserWindow.getFocusedWindow();
            currentWindow.webContents.send("emotion-analyzer-output", data.toString());
		});
		this.child.stderr.on("data", (data) => {
			console.log(data.toString());
		});
		this.child.on("close", (code) => {
			console.log(`child process exited with code ${code}`);
		});
	}

	stopListening() {
		this.child.kill();
	}
}

module.exports = { SentimentAnalyzer };
