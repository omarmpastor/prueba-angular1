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
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }]
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      { from: path.resolve(__dirname, 'src', 'index.html') },
      { from: path.resolve(__dirname, 'src', 'data.json') },
    ]),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
}