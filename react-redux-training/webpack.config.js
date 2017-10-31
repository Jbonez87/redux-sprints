const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'src', 'index.js'),
  devServer: {
    contentBase: path.join(__dirname, 'src', 'static'),
    inline: true,
    port: 3000,
  },
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
       test: /(js|jsx)$/,
       loader: 'babel-loader',
       exclude: '/node_modules/',
       options: {
         plugins: ['transform-object-rest-spread'],
         presets: ['env', 'react']
       }
      }
    ]
  }
}