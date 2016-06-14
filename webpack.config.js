const webpack                   = require('webpack');
const path                      = require('path');
const merge                     = require('webpack-merge');
const autoprefixer              = require('autoprefixer');
const HtmlWebpackPlugin         = require('html-webpack-plugin');
const ExtractTextPlugin         = require('extract-text-webpack-plugin');
const BrowserSyncPlugin         = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin        = require('clean-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const appName                   = 'react-website-starter';
const env                       = process.env.NODE_ENV;
const devServerProxyPort        = 8100;

const commonConfig = {
  context: path.resolve(__dirname, 'app'),
  entry: {
    'main': './App.jsx'
  },
  module: {
    loaders: [
      {
        test: /assets/,
        loader: 'file?name=[path][name].[ext]'
      },
      {
        test: /\.ico$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.ejs$/,
        loader: 'ejs'
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
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(env)
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
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html.ejs'
      }),
      new BrowserSyncPlugin(
        {
          host: 'localhost',
          port: 8000,
          proxy: 'http://localhost:' + devServerProxyPort
        },
        {
          reload: false
        }
      )
    ],
    devServer: {
      port: devServerProxyPort,
      historyApiFallback: true
    },
    devTool: 'eval-source-map',
    output: {
      filename: appName + '.js'
    }
  });
}

if (env === 'production') {
  module.exports = merge(commonConfig, {
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
      new CleanWebpackPlugin(commonConfig.output.path),
      new StaticSiteGeneratorPlugin(
        'main',
        ['/', 'about'],
        { appName: appName }
      ),
      new ExtractTextPlugin(appName + '-[hash].css'),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    output: {
      filename: appName + '-[hash].js',
      libraryTarget: 'umd'
    }
  });
}
