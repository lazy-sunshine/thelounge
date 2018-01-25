"use strict";

const path = require("path");
const config = require("./webpack.config.js");

config.target = "node";

// Instrumentation for coverage with Istanbul
config.module.rules.push({
	test: /\.js$/,
	include: path.resolve(__dirname, "client"),
	use: {
		loader: "istanbul-instrumenter-loader",
		options: {esModules: true},
	},
	enforce: "post",
});

module.exports = config;
