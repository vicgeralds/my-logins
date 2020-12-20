const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const rules = [
  {
    test: /\.jsx?$/,
    include: [
      path.resolve(__dirname, 'src')
    ],
    use: {
      loader: 'babel-loader'
    }
  }
]

module.exports = {
  target: 'web',
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  module: {
    rules
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
}
