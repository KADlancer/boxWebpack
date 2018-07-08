const path = require('path');

module.exports = {
    entry: [
        './src/index.js',
        './src/utils.js'
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.es6$/i,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.es6']
    }
};
