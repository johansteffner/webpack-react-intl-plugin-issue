const path = require('path')
const webpack = require('webpack')

const config = {
  entry: [
    path.join(__dirname, 'index.js')
  ],
  resolve: {
    alias: {
      'react': path.resolve(__dirname, 'node_modules', 'react')
    },
    modules: [
      'node_modules'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/',
    sourcePrefix: ''
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          plugins: [
            ['react-intl', {
              messagesDir: './dist/messages'
            }]
          ]
        },
        exclude: [
          path.resolve(__dirname, '../', 'node_modules')
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'development'
    })
  ]
}

module.exports = config
