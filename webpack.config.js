const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/, use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader"
        }]
      }
    ]
  }  
};
