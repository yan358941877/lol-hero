const path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    vendor: './src/vendor/index.js',
    mb: ['./src/lol/index.jsx', './src/lol/index.html']
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'assets/js/[name].js',
    chunkFilename: 'assets/js/chunk.[id].js'
  },
  devtool: devMode ? 'source-map' : false,

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      octicons: path.resolve(__dirname, './src/vender/octions')
    }
  },

  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    hotOnly: false,
    colors: true,
    contentBase: path.resolve(__dirname, 'public'),
    watchContentBase: false,
    watchOptions: {
      poll: false
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
      },
      {
        test: /\.html$/,
        use: [
          'file-loader?name=[name].html',
          'extract-loader',
          'html-loader'
        ]
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

    new ExtractTextPlugin('assets/css/[name].css'),

    new OpenBrowserPlugin({
      url: 'http://localhost:8080/webpack-dev-server/'
    }),

    new webpack.HotModuleReplacementPlugin()
  ]
}
