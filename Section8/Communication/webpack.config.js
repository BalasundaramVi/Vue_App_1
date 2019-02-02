const path = require('path');
const webpack = require('webpack');
const VUeLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './client/src/main.js',
  output: {
    path: path.resolve(__dirname, './client/public/dist'),
    publicPath: './client/public/dist/',
    filename: 'comp_communication_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {}
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        },
      },
    ],
  },
  plugins: [
    new VUeLoaderPlugin(),
  ],
  resolve: {
    extensions: ['*', '.js', '.vue', '.json'],
  },
  devtool: '#eval-source-map',
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}