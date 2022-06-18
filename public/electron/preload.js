const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
	sayHello: () => {
		ipcRenderer.send("say-hello");
	},
});
