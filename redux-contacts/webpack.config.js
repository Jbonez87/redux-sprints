const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  devServer: {
    contentBase: path.resolve(__dirname, 'src', 'static'),
    inline: true,
    port: 3000,
  },
  output: {
    path: path.resolve(__dirname, 'src', 'static', 'js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /(js|jsx)$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          presets: ['env', 'react'],
          plugins: [
            'transform-object-rest-spread', 
            'transform-decorators-legacy',
            'transform-class-properties'
          ],
        }
      }
    ]
  }
}