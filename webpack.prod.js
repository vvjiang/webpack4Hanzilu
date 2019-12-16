const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
  },
  plugins: [
    new BundleAnalyzerPlugin({ analyzerPort: 8919 }),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash:8].css', chunkFilename: '[id].css' })
  ],
  optimization: {
    // 取代 CommonsChunkPlugin,抽取公共代码
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader?modules'],
      }, {
        test: /\.css$/,
        include: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader?modules', 'less-loader']
      },
    ],
  }
});
