/* global __dirname */

var path = require('path');

var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var dir_js = path.resolve(__dirname, 'js');
var dir_html = path.resolve(__dirname, 'html');
var dir_build = path.resolve(__dirname, 'build');
var dir_styles = path.resolve(__dirname, 'styles');

module.exports = {
  entry: path.resolve(dir_js, 'main.js'),
  output: {
    path: dir_build,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: dir_build,
  },
  module: {
    loaders: [
      {
        test: dir_js,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      }
    ]
  },
  plugins: [
    // Simply copies the files over
    new CopyWebpackPlugin([
      { from: dir_html} // to: output.path
    ]),
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin()
  ],
  stats: {
    // Nice colored output
    colors: true
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map',
};