import React from "react";
import ReactDom from "react-dom";
// import App1 from "mf-app-01/App"
import remixRunRouter from "@remix-run/router"
console.log("remixRunRouter", remixRunRouter)
console.log(22, __webpack_share_scopes__)
import a from "react-refresh"
console.log('app', 2222, a)


const App = () => {
  return (
    <div style={{
      margin: "10px",
      padding:"10px",
      textAlign:"center",
      backgroundColor:"cyan"
    }}>
      <h1 >Host App 2</h1>
      <hr />
      {/* <App1 /> */}
      <hr />
    </div>
  )
}

export default App;

