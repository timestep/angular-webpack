/* eslint-disable */
var path = require("path");

module.exports = {
  entry: {
    app: './src/app.jsx'
  },

  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: 'app.bundle.js'
  },

  devtool: 'source-map',

  devServer: {
    contentBase: './src/'
  },

  watch: true,

  module: {
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'raw',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css',
        exclude: /node_modules/,
      }
    ]
  }
};
