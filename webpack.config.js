var webpack = require('webpack');
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
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react'] },
      { test: require.resolve('react'), loader: 'expose?React' }
    ],
  },
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
