const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pathsToClean = [
  'build',
];

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    main: ['@babel/polyfill', './src/app'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash].js',
    // 添加 chunkFilename
    publicPath: '/',
    chunkFilename: '[name].[chunkhash:5].chunk.js',
  },
  resolve: {
    alias: {
      common: path.resolve(__dirname, 'src/common'),
      modules: path.resolve(__dirname, 'src/modules'),
      services: path.resolve(__dirname, 'src/services'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template/index.html',
      filename: 'demo.html',
      favicon: './src/images/favicon_32.ico',
      minify: {
        collapseWhitespace: true,
      },
      hash: isProduction,
    }),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css', allChunks: false }),
    new CleanWebpackPlugin(pathsToClean),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              ['import', { libraryName: 'antd', style: 'css' }], // `style: true` 会加载 less 文件
            ],
          },
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript'
          ],
          plugins: [
            ['import', { libraryName: 'antd', style: 'css' }]
          ],
        }
      }, // 先解析ts和tsx，rule规则从下往上
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/',
          },
        },
        {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true,
          },
        },
        ],
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true,
          },
        }],
      }],
  },
};
