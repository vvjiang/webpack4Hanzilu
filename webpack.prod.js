const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader'],
      }),
    },
    {
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'less-loader'],
      }),
    },
    ],
  },
});
