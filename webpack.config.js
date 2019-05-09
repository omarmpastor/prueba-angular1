const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  mode: 'development',

  entry: path.resolve(__dirname, 'src', 'app', 'app.module.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
    ]
  },
  plugins: [
    new CopyPlugin([
      { from: path.resolve(__dirname, 'src', 'index.html') },
    ]),
  ]
}