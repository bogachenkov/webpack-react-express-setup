const path = require('path');
const webpack = require('webpack');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const dirPath = 'public';

module.exports = (env, argv) => ({
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, dirPath, 'assets'),
    filename: 'index.js',
    publicPath: '/assets/'
  },
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, dirPath),
    publicPath: '/assets/',
    historyApiFallback: true,
    open: true,
    hot: true,
    proxy: {
      '/api/**': {
        target: 'http://[::1]:8080',
        pathRewrite: {
          '^/api' : ''
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader', options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader', options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader', options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader', options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
              outputPath: 'images',
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: argv.mode === 'production' ?
    [
      new webpack.HotModuleReplacementPlugin(),
      new CleanWebpackPlugin([path.join(__dirname, dirPath, 'assets')])
    ] : [
      new webpack.HotModuleReplacementPlugin(),
    ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  }
})