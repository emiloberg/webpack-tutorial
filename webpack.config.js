var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

const entry = PRODUCTION
	?	[
			'./src/index.js'
		]
	:	[
			'./src/index.js',
			'webpack/hot/dev-server',
			'webpack-dev-server/client?http://localhost:8080'
		];

const plugins = PRODUCTION
	? 	[
			new webpack.optimize.UglifyJsPlugin(),
			new ExtractTextPlugin('style-[contenthash:10].css'),
			new HTMLWebpackPlugin({
				template: 'index-template.html'
			})
		]
	: 	[
			new webpack.HotModuleReplacementPlugin()
		];

plugins.push(
	new webpack.DefinePlugin({
		DEVELOPMENT: JSON.stringify(DEVELOPMENT),
		PRODUCTION: JSON.stringify(PRODUCTION)
	})
);

const cssIdentifier = PRODUCTION ? '[hash:base64:10]' : '[path][name]---[local]';

const cssLoader = PRODUCTION
	?	ExtractTextPlugin.extract({
			loader: 'css-loader?minimize&localIdentName=' + cssIdentifier
		})
	: 	['style-loader', 'css-loader?localIdentName=' + cssIdentifier];

module.exports = {
	devtool: 'source-map',
	entry: entry,
	plugins: plugins,
	externals: {
		jquery: 'jQuery' //jquery is external and available at the global variable jQuery
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel-loader'],
			exclude: /node_modules/
		}, {
			test: /\.(png|jpg|gif)$/,
			loaders: ['url-loader?limit=10000&name=images/[hash:12].[ext]'],
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			loaders: cssLoader,
			exclude: /node_modules/
		}]
	},
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: PRODUCTION ? '/' : '/dist/',
		filename: PRODUCTION ? 'bundle.[hash:12].min.js' : 'bundle.js'
	}
};
