const path = require('path');
const webpack = require('webpack');
require('dotenv').config();

const config = require('./bin/config');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    /*
      For Code splitting add:
      otherFile: './otherFile.js'
    */
    app: './app.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  devServer: config.devServer,
  module: config.module,
  plugins: config.plugins
};
