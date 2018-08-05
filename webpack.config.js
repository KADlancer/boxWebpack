const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
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
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                    /*
                    // fallback to style-loader in development
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                    */
                ]
             }
        ]
    },
    plugins: [
        htmlWebpackPlugin,
        miniCssExtractPlugin
    ],
    resolve: {
        extensions: ['.js']
    }
};
