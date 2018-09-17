const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.base.config')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const filename = '[name]'

module.exports = merge(baseConfig, {
	mode: 'development',
    entry: {
        app: [
            'whatwg-fetch',
            './src/index.js',
        ],
        login: [
            './src/login.js',
        ],
    },

    output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
        filename: `js/${filename}.js`,
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                app: {
                    name: 'app',
                    test: 'app',
                    enforce: true,
                },
                login: {
                    name: 'login',
                    test: 'login',
                    enforce: true,
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'initial',
                },
            },
        },
    },
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 3000,
		publicPath: '/',
		hotOnly: true
	},
	plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: `${filename}.css`,
            chunkFilename: `${filename}.css`,
        }),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'dist/index.html'),
            template: path.resolve(__dirname, 'src/index.html'),
            favicon:  path.resolve(__dirname, 'src/media/favicon.ico'),
            excludeChunks: [
                'login',
            ],
        }),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'dist/login.html'),
            template: path.resolve(__dirname, 'src/login.html'),
            favicon:  path.resolve(__dirname, 'src/media/favicon.ico'),
            excludeChunks: [
                'app',
            ],
        }),

    ]
})
