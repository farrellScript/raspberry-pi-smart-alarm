const path = require('path');
const webpack = require('webpack');

const config = {
  context: __dirname,
  entry: ['./app/components/Main.jsx'],
  devtool: 'true',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js',
    publicPath: '/public/js/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  target: "electron",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]    
  }
};

module.exports = config;
