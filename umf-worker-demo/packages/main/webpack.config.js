// const {
//   container: { ModuleFederationPlugin },
// } = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const { UmdPlugin } = require("universal-module-federation-plugin");

module.exports = {
  entry: "./src/index",
  mode: "development",
  // NOTE: commenting out this line will prevent the importScripts chunk loader from conflicting with the remote loader.
  // target: 'webworker',
  devtool: false,
  devServer: {
    port: 3001,
  },
  output: {
    publicPath: "//localhost:3001/",
  },
  plugins: [
    // new ModuleFederationPlugin({
    //   name: "main",
    //   remotes: {
    //     remote: "remote@//localhost:3002/remoteEntry.js",
    //   },
    // }),
    new UmdPlugin({
      remotes: {
        react:
          "react@https://unpkg.com/react@16.14.0/umd/react.production.min.js",
          "react-dom":
          "reactDom@https://unpkg.com/react-dom@16.14.0/umd/react-dom.production.min.js",
      },
      workerFiles: [/\.?worker\.js$/]
    }),
    new CopyPlugin({
      patterns: [{ from: "public" }],
    }),
  ],
};
