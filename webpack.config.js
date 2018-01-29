var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path')
var webpack = require('webpack')

var pathsToClean = [
  'build',
]

module.exports = {
  entry: ['babel-polyfill', './src/app.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.[hash].js'
  },
  devServer: {
    port: 8787,
    open: true,
    compress: true,
    index: 'demo.html'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template/index.html',
      filename: 'demo.html',
      minify: {
        collapseWhitespace: true,
      },
      hash: true
    }),
    new ExtractTextPlugin({filename: 'style.css',allChunks:false}),
    new CleanWebpackPlugin(pathsToClean),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env','react'] 
          }
        }
      }
    ]
  }
};