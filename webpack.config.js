var webpack           = require('webpack');
var path              = require('path');
var autoprefixer      = require('autoprefixer');
var merge             = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var appName           = 'react-website-starter';
var envConfigPath     = path.join(__dirname, 'webpack.' + process.env.NODE_ENV + '.config.js');
var envConfig         = require(envConfigPath)(appName);

var commonConfig = {
  context: path.resolve(__dirname, 'app'),
  entry: { javascript: './App.jsx' },
  module: {
    loaders: [
      { test: /assets/,                 loader: 'file?name=[path][name].[ext]' },
      { test: require.resolve('react'), loader: 'expose?React' }
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  plugins: [
    new HtmlWebpackPlugin({ template: './index.tmpl.html', favicon: './favicon.ico' }),
    new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify(process.env.NODE_ENV) } })
  ],
  resolve: { extensions: ['', '.js', '.jsx'] },
  resolveLoader: { root: path.resolve(__dirname, 'node_modules') },
  output: { path: path.resolve(__dirname, 'dist') }
}

module.exports = merge(commonConfig, envConfig);
