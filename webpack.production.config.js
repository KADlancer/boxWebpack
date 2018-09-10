const merge = require('webpack-merge');
const WebpackStrip = require('strip-loader');
const baseConfig = require('./webpack/webpack.config');

const stripLoader = {
	test: [/\.es6$/, /\.js$/],
	exclude: /node_modules/,
	loader: WebpackStrip.loader('console.log'),
};

module.exports = merge(baseConfig, {
	mode: 'production',
	module: {
		rules: [
			stripLoader
		]
	}
});
