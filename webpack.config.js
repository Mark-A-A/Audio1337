const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: [".ts", ".js", ".jsx"],
    alias: {
      ReduxStore: path.resolve(__dirname, 'src/App/ReduxStore/'),
      Components: path.resolve(__dirname, 'src/App/Components/'),
      Pages: path.resolve(__dirname, 'src/App/Pages/'),
      Hooks: path.resolve(__dirname, 'src/App/Hooks/'),
      Utils: path.resolve(__dirname, 'src/App/utils/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [
          /node_modules/,
          /requirements/,
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },

      {
        test: /\.(png|j?g|svg|gif|ico)?$/,
        use: 'file-loader',
        type: 'javascript/auto'
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
      favicon: path.resolve(__dirname, 'public/assets/favicon.ico'),
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          enforce: true,
          chunks: 'all'
        }
      }
    },
  },
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 9000,
  },
};