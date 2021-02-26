'use strict';

var path = require('path')

module.exports = {
  entry: './src/entry-dev.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },
  module: {
    loaders: [
      { test: /\.jade$/, loader: 'jade' },
      { test: /\.less$/, loader: 'style!css!less' },
    ],
  },
}
