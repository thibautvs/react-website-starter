var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var production = process.env.NODE_ENV === 'production';

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry: {
    html: './index-' + process.env.NODE_ENV + '.html',
    javascript: './app.js',
    vendor: ['react', 'react-dom']
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'file?name=index.html' },
      { test: /\.scss$/, loader: production ? ExtractTextPlugin.extract('style', 'css!sass!postcss') : 'style!css!sass!postcss' },
      { test: /\.js$/, exclude: /node_modules/, loader: (production ? '' : 'react-hot!') + 'babel?presets[]=es2015&presets[]=react' },
      { test: /assets/, loader: 'file?name=[path][name].[ext]' },
      { test: require.resolve('react'), loader: 'expose?React' }
    ],
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify(process.env.NODE_ENV) } }),
    new ExtractTextPlugin('react-website-starter.css'),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    production ? new webpack.optimize.UglifyJsPlugin() : function() {}
  ],
  resolveLoader: {
    root: path.resolve(__dirname, 'node_modules')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-website-starter.js'
  },
  devServer: {
    port: 8000
  }
}
