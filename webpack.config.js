var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var isProd = process.env.NODE_ENV === 'production';

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry: {
    javascript: './app.js',
    vendor: ['react', 'react-dom']
  },
  module: {
    loaders: [
      { test: /\.scss$/, loader: isProd ? ExtractTextPlugin.extract('style', 'css!sass!postcss') : 'style!css?sourceMap!sass?sourceMap!postcss' },
      { test: /\.js$/, exclude: /node_modules/, loader: (isProd ? '' : 'react-hot!') + 'babel?presets[]=es2015&presets[]=react' },
      { test: /assets/, loader: 'file?name=[path][name].[ext]' },
      { test: require.resolve('react'), loader: 'expose?React' }
    ],
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  plugins: [
    new HtmlWebpackPlugin({ template: './index.tmpl.html' }),
    new ExtractTextPlugin('react-website-starter' + (isProd ? '-[hash]' : '') + '.css'),
    isProd ? new webpack.optimize.UglifyJsPlugin() : function() {},
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor' + (isProd ? '-[hash]' : '') + '.js'),
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
