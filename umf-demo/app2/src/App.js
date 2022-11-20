import React from "react";
import ReactDom from "react-dom";
import useRoutes from "react-router/useRoutes"
import remixRunRouter from "@remix-run/router"
console.log("useRoutes", useRoutes)
console.log("@remix-run/router", remixRunRouter)

console.log("webpack5 sharescopes", __webpack_share_scopes__)

const App = () => {
  return (
    <div style={{
      margin: "10px",
      padding:"10px",
      textAlign:"center",
      backgroundColor:"cyan"
    }}>
      <h1 >App 2</h1>
    </div>
  )
}

export default App;

