//var path    = require('path')
//var webpack = require('webpack')
//var HtmlWebpackPlugin = require('html-webpack-plugin');
//
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
//module.exports        = {
//	devtool: 'cheap-module-eval-source-map',
//	entry: [
//		'webpack-hot-middleware/client',
//		'./src/main'
//		//{main: ['./src/main']},
//		//{vendor: ['react', 'react-dom', 'react-router', 'babel-polyfill', 'redux', 'react-redux']}
//	],
//	output: {
//		path: path.join(__dirname, 'dist'),
//		filename: '/[name].bundle.js',
//		chunkFilename: '/[name].js',
//		publicPath: '/dist/'
//	},
//	plugins: [
//		new webpack.optimize.OccurenceOrderPlugin(),
//		new webpack.HotModuleReplacementPlugin(),
//		new webpack.NoErrorsPlugin(),
//
//		new ExtractTextPlugin('/main.css'),
//		new webpack.DefinePlugin({
//		    'process.env': {
//		        ENV: JSON.stringify('development'),
//		        NODE_ENV: JSON.stringify('development')
//		    },
//		    '__NODE__': JSON.stringify(true),
//
//		    __CLIENT__: true,
//		    __SERVER__: false,
//		    'process.env.BROWSER': true,
//
//		}),
//
//		new webpack.optimize.CommonsChunkPlugin({
//		    names: 'vendor',
//		    minChunks: Infinity
//		}),
//	],
//	module: {
//		loaders: [
//			//{
//			//	test: /\.js$/,
//			//	loaders: ['babel'],
//			//	exclude: /node_modules/,
//			//	include: __dirname
//			//},
//			            { test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'src') },
//
//			{test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')}
//		],
//
//	}
//}


var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    //devtool: 'inline-source-map',
    devtool: 'eval',
    debug: true,

    //entry: {
    //    main: [path.join(process.cwd(), 'src/main.js')],
    //    vendor: ['react', 'react-dom', 'react-router', 'babel-polyfill', 'redux', 'react-redux']
    //},
    entry:  [
        "webpack-dev-server/client?http://localhost:9090",
        "webpack/hot/only-dev-server",
        "./src/main"
    ],
    output: {
	    //path: path.join(__dirname, './dist/'),
	    path: path.join(process.cwd(), 'dist/'),
	    //publicPath: path.join(process.cwd(), 'dist/'),

	    //publicPath: path.resolve(__dirname, './dist/'),
	    publicPath: 'http://localhost:9090/',
	    filename: '/[name].js',
        chunkFilename: '/[name].xx.js',
    },

    module: {
        loaders: [
            { test: /\.js$/, loaders: ["react-hot",'babel'], include: path.join(process.cwd(), 'src/') },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') }
        ]
    },
    // Automatically transform files with these extensions
    resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
    },

    //devServer: {
    //    historyApiFallback: true,
    //    hot: false,
    //    inline: true,
    //    grogress: true,
    //    port:9090
    //},
    plugins: [
        new ExtractTextPlugin('/main.css'),

	    new webpack.optimize.OccurenceOrderPlugin(),
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoErrorsPlugin(),


        new webpack.DefinePlugin({
            'process.env': {
                ENV: JSON.stringify('development'),
                NODE_ENV: JSON.stringify('development')
            },
            '__NODE__': JSON.stringify(true),

            __CLIENT__: true,
            __SERVER__: false,
            'process.env.BROWSER': true,

        }),

        new webpack.optimize.CommonsChunkPlugin({
            names: 'vendor',
            minChunks: Infinity
        }),
    ],

};