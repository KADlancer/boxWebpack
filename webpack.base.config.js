const path = require('path')

module.exports = {
	resolve: {
        extensions: ['.js','.jsx','.ts','.tsx'],
		alias: {
            _components: path.resolve(__dirname, '..', 'src/components/'),
            _views: path.resolve(__dirname, '..', 'src/views/'),
        },
	},
	module: {
		rules: [
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(woff|woff2)$/,
                include: path.resolve(__dirname, 'src/fonts'),
                use: [
                    'file-loader',
                ],
            },

            {
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				options: { presets: ['@babel/env'] }
			},
			{
				test:/\.(s*)css$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							modules: false,
							importLoaders: 2,
						},
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
