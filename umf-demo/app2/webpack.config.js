const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container
const path = require('path');
const {UmdPlugin} = require("universal-module-federation-plugin")
const Inject = require("inject-webpack")

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
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
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    // To learn more about the usage of this plugin, please visit https://webpack.js.org/plugins/module-federation-plugin/
    new ModuleFederationPlugin({
      name: 'app2',
      filename: 'remoteEntry.js',
      remotes: {
        "react-router": "app4reactRouter@https://cdn.jsdelivr.net/npm/react-router@6.4.3/dist/umd/react-router.production.min.js",
        "@remix-run/router": "app5remixRouter@https://cdn.jsdelivr.net/npm/@remix-run/router@1.0.3/dist/router.umd.min.js"
      },
      exposes: {
        './App': './src/App.js',
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
    new UmdPlugin({
      includeRemotes: ["react-router", "@remix-run/router"],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
