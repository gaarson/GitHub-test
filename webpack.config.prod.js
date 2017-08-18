const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    js: ['babel-polyfill', path.join(__dirname, 'client/app.js')]
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.js$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'latest']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    })
  ]
}
