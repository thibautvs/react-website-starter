module.exports = function(appName) {
  return {
    module: {
      loaders: [
        { test: /\.scss$/,   loaders: ['style', 'css?sourceMap', 'sass?sourceMap', 'postcss'] },
        { test: /\.(jsx?)$/, loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react'], exclude: /node_modules/ }
      ]
    },
    output: { filename: appName + '.js' },
    devTool: 'eval-source-map',
    devServer: { port: 8000 }
  };
};
