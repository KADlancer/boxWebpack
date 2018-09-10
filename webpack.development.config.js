const merge = require('webpack-merge');
const baseConfig = require('./webpack/webpack.config');

module.exports = merge(baseConfig, {
	mode: 'development',
});
