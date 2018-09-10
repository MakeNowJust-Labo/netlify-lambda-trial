const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  devServer: {
    proxy: {
      '/.netlify/functions': {
        target: "http://localhost:9000",
        pathRewrite: {"^/.netlify/functions" : ""}
      }
    }
  }
};
