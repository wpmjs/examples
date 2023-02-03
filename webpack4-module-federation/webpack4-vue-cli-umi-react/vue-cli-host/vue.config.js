const MF = require("mf-webpack4")

module.exports = {
  parallel: false,
  configureWebpack: {
    entry: "./src/main.js",
    // output: {
    //   publicPath: ""
    // },
    devServer: {
      port: "9004"
    },
    plugins: [
      new MF({
        name: "vueCli",
        remotes: {
          "umi": "umi@http://localhost:9005/remoteEntry.js",
          "vueCliRemote": "vueCliRemote@http://localhost:9006/js/remoteEntry.js"
        },
        shared: {
          "react-dom": {
          },
          "react": {
          },
          vue: {
            "import": "vue"
          },
        }
      })
    ]
  }
}