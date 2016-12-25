module.exports = {
	entry: './src/app.js',
	output: {
		filename: 'bundle.js',
		publicPath: '/build',
		path: __dirname + '/build'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel-loader']
			},
			{
				test: /\.scss$/,
        		loaders: ['style', 'css', 'sass']
			}
		]
	},
	devServer: {
		colors: true,
		inline: true,
		historyApiFallback: true,
		port: 8080
	}
}
