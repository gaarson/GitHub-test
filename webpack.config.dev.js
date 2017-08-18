const path = require('path')

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    js: ['babel-polyfill', path.join(__dirname, 'client/client.js')]
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
  }
}
