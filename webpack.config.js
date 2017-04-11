/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');

module.exports = {

  // devtool: 'eval-source-map',

  context: path.join(__dirname, 'src-ui'),

  entry: {
    app : './app',
    // local : './app-local',
    'canvas-wrapper' : './canvas-wrapper'
  },

  output: {
    path: path.join(__dirname, 'build-ui/js'),
    filename: '[name].js',
    publicPath: '/js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src-ui')
      }
    ]
  }
  };
