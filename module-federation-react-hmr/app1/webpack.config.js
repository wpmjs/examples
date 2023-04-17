const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const SingleReactRefresh = require("single-react-refresh-plugin")

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    open: true,
    allowedHosts: 'all',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    static: path.join(__dirname, 'dist'),
    port: 9001,
    hot: true
  },
  output: {
    publicPath: 'http://localhost:9001/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          // plugins: [require.resolve('react-refresh/babel')],
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  cache: false,
  resolve: {

  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    // To learn more about the usage of this plugin, please visit https://webpack.js.org/plugins/module-federation-plugin/
    new ModuleFederationPlugin({
      name: 'app1',
      filename: 'remoteEntry.js',
      remotes: {
        "mf-app-01": "mfapp01@https://cdn.jsdelivr.net/npm/mf-app-01/dist/remoteEntry.js",
        "app2": "app2@http://localhost:9002/remoteEntry.js",
        "app3": "app3@http://localhost:9003/remoteEntry.js",
      },
      // exposes: {
      //   './App': './src/App1.js',
      // },
      shared: { react: { singleton: false, requiredVersion: "18.2.0" }, 'react-dom': { singleton: true } },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new SingleReactRefresh()
  ],
};
