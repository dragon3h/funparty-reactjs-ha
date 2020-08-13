const path = require('path');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/index.js',
  
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
  },
  
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: false,
    open: true,
    port: 1338,
  },
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        // Some change here
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  
  devtool: 'source-map',
};