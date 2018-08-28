const path = require('path');

const resolve = require('./webpack/resolve.js');


const CleanWebpackPlugin = require('clean-webpack-plugin');
const cleanWebpackPlugin = new CleanWebpackPlugin('dist', {} )

const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebPackPlugin({
    hash: true,
    template: "./index.html",
    filename: "./index.html"
});

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const miniCssExtractPlugin = new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: "[name].css",
    chunkFilename: "[id].css"
})


module.exports = {
    entry: [
        './src/index.js',
        './src/js/utils.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve,
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
                test: /\.jsx$/,          // do transpile any files ending in .jsx
                exclude: /node_modules/, // don't transpile node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['transform-react-jsx']
                    }
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
                use:[
                    /* //fallback to style-loader in development
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : */ MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ],
    },
    plugins: [
        //cleanWebpackPlugin,
        htmlWebpackPlugin,
        miniCssExtractPlugin
    ],
};
