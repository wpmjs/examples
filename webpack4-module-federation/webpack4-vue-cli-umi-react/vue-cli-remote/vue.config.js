const MF = require("mf-webpack4")

module.exports = {
  parallel: false,
  publicPath: "http://localhost:9006",
  chainWebpack(chain) {
    chain.optimization.splitChunks().clear()
    chain.devServer.port("9006")
    chain.plugin("moduleFederation")
      .use(MF, [{
        name: "vueCliRemote",
        remotes: {
          "umi": "umi@http://localhost:9005/remoteEntry.js"
        },
        shared: {
          "react-dom": {
          },
          "react": {
          },
          vue: {
            "import": "vue"
          },
        },
        exposes: {
          "./App": "src/App.vue"
        }
      }])
  },
}