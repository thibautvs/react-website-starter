var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var isProd = process.env.NODE_ENV === 'production';
var isDev = !isProd;

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry: {
    javascript: './app.js',
    vendor: ['react', 'react-dom']
  },
  module: {
    loaders: [
      { test: /\.scss$/, loader: isDev ? 'style!css?sourceMap!sass?sourceMap!postcss' : ExtractTextPlugin.extract('style', 'css!sass!postcss') },
      { test: /\.js$/, exclude: /node_modules/, loader: (isDev ? 'react-hot!' : '') + 'babel?presets[]=es2015&presets[]=react' },
      { test: /assets/, loader: 'file?name=[path][name].[ext]' },
      { test: require.resolve('react'), loader: 'expose?React' }
    ],
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  plugins: [
    new HtmlWebpackPlugin({ template: './index.tmpl.html' }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor' + (isProd ? '-[hash]' : '') + '.js'),
    isProd ? new ExtractTextPlugin('react-website-starter' + (isProd ? '-[hash]' : '') + '.css') : function() {},
    isProd ? new webpack.optimize.UglifyJsPlugin() : function() {},
    new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify(process.env.NODE_ENV) } })
  ],
  resolveLoader: {
    root: path.resolve(__dirname, 'node_modules')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-website-starter' + (isProd ? '-[hash]' : '') + '.js'
  },
  devTool: 'eval-source-map',
  devServer: {
    port: 8000
  }
}
