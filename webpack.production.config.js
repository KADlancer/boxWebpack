const merge = require('webpack-merge')
const WebpackStrip = require('strip-loader')
const baseConfig = require('./webpack.config')

const filename = '[name]-[hash]'

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
	},
    output: {
        filename: `js/${filename}.js`,
    },
})
