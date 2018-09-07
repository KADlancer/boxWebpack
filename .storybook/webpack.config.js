const path = require('path');
const resolve = require('../webpack/resolve.js');

module.exports = {
  resolve: {
    alias: resolve.alias,
  },
  module: {
    rules: [
		{
			test: /\.css$/,
			use: [
				{
					loader: 'style-loader',
				},
				{
					loader: 'css-loader',
					options: {
						modules: true,
					},
				},
				{
					loader: 'postcss-loader',
				},
			],
		},

		{
			test: /\.scss$/,
			use: [
				{ loader: 'style-loader' },
				{
					loader: 'css-loader',
					options: { importLoaders: 2 },
				},
				{
					loader: 'postcss-loader',
					options: {
						plugins: () => [
							require('autoprefixer')({
								browsers: ['last 1 version', 'ie >= 11'],
							}),
						],
					},
				},
				{
					loader: 'sass-loader',
					options: {
						includePaths: [path.resolve(__dirname, '..', 'node_modules')],
					},
				},
			],
		},
	],
  },
}
