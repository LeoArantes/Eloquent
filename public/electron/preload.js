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
	}
});
