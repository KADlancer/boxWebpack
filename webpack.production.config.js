var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.config');

var stripLoader = {
    test: [/\.es6$/, /\.js$/],
    exclude: /node_modules/,
    loader: WebpackStrip.loader('console.log')
};

devConfig.module.rules.push(stripLoader);

module.exports = devConfig;
