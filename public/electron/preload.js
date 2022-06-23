const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
	sayHello: () => {
		ipcRenderer.send("say-hello");
	},
	setSize: (width, height, recenter) => {
		ipcRenderer.send("set-size", { width, height, recenter });
	},
	CloseWindow: () => {
		ipcRenderer.send("close-window");
	},
	StartListening: () => {
		ipcRenderer.send("start-listening");
	},
	StopListening: () => {
		ipcRenderer.send("stop-listening");
	},
	EmotionAnalyzer: (callback) => {
		// Deliberately strip event as it includes `sender`
		ipcRenderer.on("emotion-analyzer-output", (event, ...args) => {
			console.log(args);
			callback(...args);
		});
	},
});
