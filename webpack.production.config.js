const path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    vendor: './src/vendor/index.js',
    mb: ['./src/lol/index.jsx']
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'assets/js/[name].js'
  },
  devtool: devMode ? 'source-map' : false,

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      octicons: path.resolve(__dirname, './src/vender/octions')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(jpg|png)$/,
        use: ['url-loader?name=assets/images/[name].[ext]&limit=10240']
      },
      {
        test: /\.(eot|svg|ttf|woff2?)$/,
        use: ['file-loader?name=assets.fonts/[name].[ext']
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: 'vendor'
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      recompose: 'recompose'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/lol/index.html'),
      filename: path.resolve(__dirname, './public/lol/index.html')
    }),
    new ExtractTextPlugin('assets/css/[name].css')
  ]
}
