const webpack = require('webpack'); // for hot

module.exports = {
    entry: './src/index',
    output: {
      filename: './bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'env']
            }
          }
        },
        {
          test: /\.css/,
          use: ['style-loader', 'css-loader']
        },
        { 
          test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
          loader: 'url-loader?limit=100000' 
        }
      ]
    },

    devtool: 'cheap-module-eval-source-map',
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
      open: true,
      port: 3004,
      inline: true,
      hot: true
    }
  };