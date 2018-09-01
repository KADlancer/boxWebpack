const path = require('path');

const resolve = require('./webpack/resolve.js');

const devMode = process.env.NODE_ENV !== 'production'

const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebPackPlugin({
    hash: true,
    template: "./src/index.html",
    filename: "./src/index.html",
});

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: devMode ? '[name].css' : '[name].[hash].css',
    chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
});


module.exports = {
    entry: [
        './src/index.js',
        './src/js/utils.js',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    resolve,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.jsx$/,          // do transpile any files ending in .jsx
                exclude: /node_modules/, // don't transpile node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['transform-react-jsx'],
                    },
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true },
                    },
                ],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ],
            },
        ],
    },
    plugins: [
        htmlWebpackPlugin,
        miniCssExtractPlugin,
    ],
};
