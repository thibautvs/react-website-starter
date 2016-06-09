const appName           = 'react-website-starter';
const env               = process.env.NODE_ENV;
const webpack           = require('webpack');
const path              = require('path');
const merge             = require('webpack-merge');
const autoprefixer      = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const commonConfig = {
  context: path.resolve(__dirname, 'app'),
  entry: {
    javascript: './App.jsx'
  },
  module: {
    loaders: [
      {
        test: /assets/,
        loader: 'file?name=[path][name].[ext]'
      },
      {
        test: require.resolve('react'),
        loader: 'expose?React'
      }
    ]
  },
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.tmpl.html',
      favicon: './favicon.ico'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  resolveLoader: {
    root: path.resolve(__dirname, 'node_modules')
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  }
};

if (env === 'development') {
  module.exports = merge(commonConfig, {
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loaders: ['style', 'css?sourceMap', 'sass?sourceMap', 'postcss']
        },
        {
          test: /\.(jsx?)$/,
          exclude: /node_modules/,
          loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react']
        }
      ]
    },
    output: {
      filename: appName + '.js'
    },
    devTool: 'eval-source-map',
    devServer: {
      port: 8000,
      historyApiFallback: true
    }
  });
}

if (env === 'production') {
  module.exports = merge(commonConfig, {
    entry: {
      vendor: ['react', 'react-dom', 'react-router']
    },
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style', 'css!sass!postcss')
        },
        {
          test: /\.(jsx?)$/,
          exclude: /node_modules/,
          loader: 'babel?presets[]=es2015&presets[]=react'
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin(appName + '-[hash].css'),
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor-[hash].js'),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin()
    ],
    output: {
      filename: appName + '-[hash].js'
    }
  });
}
