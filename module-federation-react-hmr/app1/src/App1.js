import React from "react";
import ReactDom from "react-dom";
import App2 from "app2/App"
import App3 from "app3/App"
import App1 from "mf-app-01/App"
// import remixRunRouter from "@remix-run/router"
console.log(1, __webpack_share_scopes__)
// console.log("remixRunRouter", remixRunRouter)
import a from "react-refresh"
// window.aaa = window.aaa || a
console.log('app', 1111, a, React, ReactDom)

const App = () => {
  return (
    <div style={{
      margin: "10px",
      padding:"10px",
      textAlign:"center",
      backgroundColor:"cyan"
    }}>
      <h1 >Host App 1</h1>
      <hr />
      <App1 />
      <hr />
      <App2 />
      <App3 />
    </div>
  )
}

export default App;

