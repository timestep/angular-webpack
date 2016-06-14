/* eslint-disable */

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: './bin',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};
