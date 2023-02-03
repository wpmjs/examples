 /* eslint-disable */
 console.log(2222999)
 require("/Users/zhanghongen/Desktop/open-code/examples/webpack4-module-federation/webpack4-vue-cli-umi-react/umi-remote/$_mfplugin_virtualInitConfig/index.js")
 const {setInitShared} = require("/Users/zhanghongen/Desktop/open-code/examples/webpack4-module-federation/webpack4-vue-cli-umi-react/umi-remote/$_mfplugin_virtualSetShared/index.js")
 const exposes = {
   
       "./App" () {
         return import(".././src/App")
       }
     
 }
 module.exports = window["umi"] = window["umi"] || {
   async get(moduleName) {
     if (!exposes[moduleName]) {
       throw new Error(`Uncaught Error: Module "${moduleName}" does not exist in container.`)
     }
     const module = await exposes[moduleName]()
     return function() {
       return module
     }
   },
   // 此处是某个scope之内的shared
   async init(shared) {
     setInitShared(shared)
     await window["__mfplugin__umi"].initSharedPromise
     return 1
   }
 }
 
// ./$_mfplugin_remoteEntry/index.js