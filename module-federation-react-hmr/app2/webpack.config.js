const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container
const path = require('path');
const {UmdPlugin} = require("universal-module-federation-plugin")
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const SingleReactRefresh = require("single-react-refresh-plugin")

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    hot: true,
    allowedHosts: 'all',
    open: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    static: path.join(__dirname, 'dist'),
    port: 9002,
  },
  output: {
    publicPath: 'http://localhost:9002/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          plugins: [require.resolve('react-refresh/babel')],
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin({
    
    }),
    // To learn more about the usage of this plugin, please visit https://webpack.js.org/plugins/module-federation-plugin/
    new ModuleFederationPlugin({
      name: 'app2',
      filename: 'remoteEntry.js',
      remotes: {
        "mf-app-01": "mfapp01@https://cdn.jsdelivr.net/npm/mf-app-01/dist/remoteEntry.js"
      },
      exposes: {
        './App': './src/App2.js',
      },
      shared: { react: { singleton: false }, 'react-dom': { singleton: false } },
    }),
    new UmdPlugin({
      remotes: {
        // app2: "app2@http://localhost:9002/main.js",
        "@remix-run/router": "app5remixRouter@https://cdn.jsdelivr.net/npm/@remix-run/router@1.0.3/dist/router.umd.min.js",
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new SingleReactRefresh()
  ],
};
