import React from "react";
import ReactDom from "react-dom";
// import App1 from "mf-app-01/App"
import remixRunRouter from "@remix-run/router"
console.log("remixRunRouter", remixRunRouter)
console.log(33, __webpack_share_scopes__)

const App = () => {
  return (
    <div style={{
      margin: "10px",
      padding:"10px",
      textAlign:"center",
      backgroundColor:"cyan"
    }}>
      <h1 >Host App 3</h1>
      <hr />
      {/* <App1 /> */}
      <hr />
    </div>
  )
}

export default App;

