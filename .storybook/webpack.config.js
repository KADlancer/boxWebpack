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
	],
  },
}
