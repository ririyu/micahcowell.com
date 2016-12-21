var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './src/js/main.js',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist', 'js')
	},
	module: {
		loaders: [
			{
	      		test: /\.js$/,
	      		exclude: /(node_modules|bower_components)/,
	      		loader: 'babel-loader',
	      		query: {
	        		presets: ['es2015']
	    		}
			}
		]
	}
}
