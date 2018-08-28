const merge = require('webpack-merge');
const WebpackStrip = require('strip-loader');
const baseConfig = require('./webpack.config');

const stripLoader = {
    test: [/\.es6$/, /\.js$/],
    exclude: /node_modules/,
    loader: WebpackStrip.loader('console.log'),
};
baseConfig.module.rules.push(stripLoader);

module.exports = merge(baseConfig, {
    mode: 'production',
});