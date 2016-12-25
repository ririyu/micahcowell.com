module.exports = {
	entry: './src/app.js',
	output: {
		filename: 'bundle.js',
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
		inline: true,
		port: 8080
	}
}
