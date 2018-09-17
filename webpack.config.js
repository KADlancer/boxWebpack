const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.base.config');

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
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '/dist/',
        filename: `${filename}.js`,
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
		contentBase: path.join(__dirname, 'public/'),
		port: 3000,
		publicPath: 'http://localhost:3000/dist/',
		hotOnly: true
	},
	plugins: [
	    new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: `${filename}.css`,
            chunkFilename: `${filename}.css`,
        }),
]
});
