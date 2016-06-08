var webpack           = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(appName) {
  return {
    entry: { vendor: ['react', 'react-dom'] },
    module: {
      loaders: [
        { test: /\.scss$/,   loader: ExtractTextPlugin.extract('style', 'css!sass!postcss') },
        { test: /\.(jsx?)$/, loader: 'babel?presets[]=es2015&presets[]=react', exclude: /node_modules/ }
      ]
    },
    plugins: [
      new ExtractTextPlugin(appName + '-[hash].css'),
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor-[hash].js'),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin()
    ],
    output: { filename: appName + '-[hash].js' }
  };
};
