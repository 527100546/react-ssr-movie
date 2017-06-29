import express from 'express';
import api from './routes/api';
import serverRender from './routes/serverRender';
import path from 'path';
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var webpackConfig = require('../webpack.dev.config')

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../dist')));

app.set('views', path.join(__dirname, '../src'));

app.use('/api', api);

app.use('*', serverRender);


var compiler = webpack(webpackConfig)

console.log(webpackConfig.output.publicPath,'---- webpackConfig.output------')
app.use(require("webpack-dev-middleware")(compiler, {
	noInfo: true, publicPath: webpackConfig.output.publicPath
}));

/*************************************************************
 *
 * Webpack Dev Server
 *
 * See: http://webpack.github.io/docs/webpack-dev-server.html
 *
 *************************************************************/

//if (!process.env.PRODUCTION) {
	var WebpackDevServer = require('webpack-dev-server');
	var config = require('../webpack.dev.config')

	new WebpackDevServer(webpack(config), {
		publicPath: config.output.publicPath,
		hot: true,
		noInfo: true,
		historyApiFallback: true,
		headers: { 'Access-Control-Allow-Origin': '*' }
	}).listen(9090, 'localhost', function (err, result) {
		if (err) {
			console.log(err);
		}
	});
//}

//app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

const port = 8888;

app.listen(port, () => console.log(`server started，at ${port}`));

