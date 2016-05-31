var webpack = require('webpack');

module.exports = {
  entry: {
    html: './app/index.html',
    javascript: './app/app.js',
    vendor: ['react', 'react-dom']
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=index.html',
      },
      {
        test: require.resolve('react'),
        loader: 'expose?React'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react']
      }
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ],
  output: {
    path: './dist',
    filename: 'app.js'
  },
  devServer: {
    port: 8000
  }
}
