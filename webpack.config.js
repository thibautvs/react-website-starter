var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    html: './app/index.html',
    javascript: './app/app.js',
    vendor: ['react', 'react-dom']
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'file?name=index.html' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass!postcss') },
      { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react'] },
      { test: /\.(jpg|png|gif|svg)$/, loader: 'file?name=img/[name].[ext]' },
      { test: require.resolve('react'), loader: 'expose?React' }
    ],
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  plugins: [
    new ExtractTextPlugin('react-website-starter.css'),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ],
  output: {
    path: './dist',
    filename: 'react-website-starter.js'
  },
  devServer: {
    port: 8000
  }
}
