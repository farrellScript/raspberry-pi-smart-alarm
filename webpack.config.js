const path = require('path');
const webpack = require('webpack');

const config = {
  context: __dirname,
  entry: ['./src/screens/Main.jsx'],
  devtool: 'true',
  output: {
    path: path.resolve(__dirname, 'src/bundle'),
    filename: 'bundle.js',
    publicPath: '/src/bundle/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
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
