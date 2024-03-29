const debug = process.env.NODE_ENV = "production";
const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  context: __dirname + "/src",
  devtool: "inline-sourcemap",
  entry: "./index.js",
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      },
      {
        test:/\.css$/,
        use:['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [{
           loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'url-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        parallel: true,
      })
    ]
  },
  output: {
    path: __dirname + "/public/",
    filename: "ryan-lafferty.min.js"
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CopyWebpackPlugin([
      {from: "data/resumeGeneric.pdf"},
      {
        from: '../node_modules/pdfjs-dist/cmaps/',
        to: 'cmaps/'
      },
    ]),
    new CompressionPlugin({
      algorithm: 'gzip'
    }),
  ],
};