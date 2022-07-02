const path = require("path");
module.exports = {
	babel: {
		plugins: ["@babel/plugin-proposal-optional-chaining"],
	},
	webpack: {
		alias: {
			"@": path.resolve(__dirname, "src/"),
			"@assets": path.resolve(__dirname, "src/assets"),
			"@components": path.resolve(__dirname, "src/components"),
		},
	},
};
