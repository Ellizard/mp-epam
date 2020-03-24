const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		writeToDisk: true,
		contentBase: './dist'
	},
	devtool : 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: [
								'@babel/preset-env'
							]
						}
					},
					{
						loader: 'eslint-loader',
					}
				],

			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new PrettierPlugin({
			printWidth: 80,
			tabWidth: 2,
			useTabs: false,
			semi: true,
			encoding: 'utf-8',
			extensions: [ ".js" ]
		}),
		new HTMLWebpackPlugin({
			template: './src/index.html',
		}),
	],
};
