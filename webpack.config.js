const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/',
    assetModuleFilename: 'public/[hash][ext][query]'
  },
  resolve: {
    extensions: [".ts", ".js", ".jsx"],
    alias: {
      ReduxStore: path.resolve(__dirname, 'src/App/ReduxStore/'),
      Components: path.resolve(__dirname, 'src/App/Components/'),
      Pages: path.resolve(__dirname, 'src/App/Pages/'),
      Hooks: path.resolve(__dirname, 'src/App/Hooks/'),
      Utils: path.resolve(__dirname, 'src/App/utils/'),
      Services: path.resolve(__dirname, 'src/App/Services/'),
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
            presets: [
              '@babel/preset-env',
              '@babel/react',
              {
                plugins: ['@babel/plugin-proposal-class-properties'
                  , '@babel/plugin-transform-runtime'
                ],
              },
            ],
          },
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },

      {
        // test: /\.(jpe?g|png|j?g|svg|gif)?$/,

        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        // use: {
        //   loader: 'url-loader',
        // },
        // type: 'asset',
        // generator: {
        //   filename: 'public/images/[hash][ext][query]'
        // }
      },
      {
        test: /\.(ico)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'pubic/icons/[hash][ext][query]'
        }
      }
    ],
  },
  plugins: [
    new ImageMinimizerPlugin({
      minimizerOptions: {
        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
          ["gifsicle", { interlaced: true }],
          ["jpegtran", { progressive: true }],
          ["optipng", { optimizationLevel: 5 }],
        ],
      },
    }),
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
    proxy: {
      // '/audio': 'http://localhost:1337',
      '/audio': {
        target: 'http://localhost:1337',
        pathRewrite: { '^/audio': '' },
      }
    },
  },
};