import React from "react";
import ReactDom from "react-dom";
import App2 from "app2/App"
import useRoutes from "react-router/useRoutes"
import remixRunRouter from "@remix-run/router"
console.log("useRoutes", useRoutes)
console.log("remixRunRouter", remixRunRouter)

const App = () => {
  return (
    <div style={{
      margin: "10px",
      padding:"10px",
      textAlign:"center",
      backgroundColor:"cyan"
    }}>
      <h1 >App 1</h1>
      <App2 />
    </div>
  )
}

export default App;

