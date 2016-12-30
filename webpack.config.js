const path = require('path');

module.exports = {
  context: path.join(__dirname, '/sketch'),

  devtool: 'inline-source-map', // or 'source-map'

  entry: {
    javascript: './js/sketch.js',
    html: './index.html',
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    root: path.join(__dirname, './sketch/js'),
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015'],
      },
    }, {
      test: /\.html$/,
      loader: 'file?name=[name].[ext]',
    }],
  },
};
