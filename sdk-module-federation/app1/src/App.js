import React, {Suspense} from "react";

const shared = {
  react: {
    version: "17.0.2",
    async get () {
      // const res = await window.System.import("https://unpkg.com/react@17.0.2/umd/react.development.js")
      return function () {
        return React
      }
    }
  },
  "react-dom": {
    version: "17.0.2",
    async get () {
      return function () {
        return {
          test: "react-dom"
        }
      }
    }
  }
}

import mfjs from "usemf"
const app2_version1 = mfjs.import({
  url: "http://localhost:9002/remoteEntry.js",
  name: "app2",
  shared:  {
    react: shared.react
  }
})("./App")

const app2_version2 = mfjs.import({
  url: "http://localhost:9003/remoteEntry.js",
  name: "app3",
  shared
})("./App")

const App2 = React.lazy(() => app2_version1)
const App2_2 = React.lazy(() => app2_version2)


const App = () => {
  return (
    <div>
      <div style={{
        margin:"10px",
        padding:"10px",
        textAlign:"center",
        backgroundColor:"greenyellow"
      }}>
        <h1>App1</h1>
      </div>
      <Suspense fallback={"loading..."}>
        <App2/>
      </Suspense>
      <Suspense fallback={"loading..."}>
        <App2_2/>
      </Suspense>
    </div>)
}


export default App;
