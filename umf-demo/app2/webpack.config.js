const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container
const path = require('path');
const {UmdPlugin, UniversalModuleFederationPlugin} = require("universal-module-federation-plugin")
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
      exposes: {
        './App': './src/App.js',
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
    new UniversalModuleFederationPlugin({
      // The matched remotes are loaded in umd mode
      remotes: {
        "mf-app-01": "mfapp01@mf-app-01@1.0.2/dist/remoteEntry.js"
      },
      runtime: {
        resolvePath({name, version, entry, query}) {
          return `https://cdn.jsdelivr.net/npm/${name}@${version}/${entry}?${query}`
        },
        async import({url, name}) {
          await new Promise(resolve => {
            __webpack_require__.l(url, resolve)
          })
          return window[name]
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
