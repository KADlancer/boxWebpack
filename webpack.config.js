const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  });

module.exports = {
    entry: [
        './src/index.js',
        './src/js/utils.js'
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            },
            {
              test: /\.html$/,
              use: [
                {
                  loader: "html-loader",
                  options: { minimize: true }
                }
              ]
            },
            {
                test:/\.(s*)css$/,
                use:['style-loader','css-loader', 'sass-loader']
             }
        ]
    },
    plugins: [
        htmlWebpackPlugin
    ],
    resolve: {
        extensions: ['.js']
    }
};
