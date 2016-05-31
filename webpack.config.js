module.exports = {
  entry: {
    html: './app/index.html',
    javascript: './app/app.js'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=index.html',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react']
      }
    ],
  },
  output: {
    path: './dist',
    filename: 'app.js'
  },
  devServer: {
    port: 8000
  }
}
