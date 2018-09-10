const merge = require('webpack-merge');
const baseConfig = require('../webpack/webpack.base.config');

module.exports = merge(baseConfig, {
	mode: 'development',
});
