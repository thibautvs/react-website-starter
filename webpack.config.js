var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry: {
    html: './index.html',
    javascript: './app.js',
    vendor: ['react', 'react-dom']
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'file?name=[name].[ext]' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass!postcss') },
      { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react'] },
      { test: /assets/, loader: 'file?name=[path][name].[ext]' },
      { test: require.resolve('react'), loader: 'expose?React' }
    ],
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  plugins: [
    new ExtractTextPlugin('react-website-starter.css'),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
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
