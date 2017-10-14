var path = require('path');
var webpack = require('webpack');
var ExtractTestPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
/*npm plugin below is to 'clean' / remove folders that get created when the build is run:
purpose is perhaps to hide the code from the user?
or it removes a previous copy and creates a new one after?*/
var CleanWebpackPlugin = require('clean-webpack-plugin');

var extractPlugin = new ExtractTestPlugin({
  filename: "main.css"
});

module.exports = {
  entry: {
    app: './src/js/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',  //this means keep the original name and extention / don't change it
              outputPath: 'img/'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'  //this means keep the original name and extention / don't change it
            }
          }
        ],
        exclude: path.resolve(__dirname, 'src/index.html')
      }
    ]
  },
  plugins: [
    //last video, to get jQuery to work:
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    //end of jQuery portion that was added at the end
    extractPlugin,
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    // //last couple sections added to the tutorial
    // new HtmlWebpackPlugin({
    //   filename: 'users.html',
    //   template: 'src/users.html',
    //   chunks: []
    // }),
    //which folder do I want to have deleted after it has been created in the build and run?:
    new CleanWebpackPlugin(['dist'])
  ]
};
