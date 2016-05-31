module.exports = {
  entry: './app/app.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel?presets[]=es2015&presets[]=react']
      }
    ],
  },
  output: {
    path: './dist',
    filename: 'app.js'
  }
}
