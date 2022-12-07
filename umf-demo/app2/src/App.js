import React from "react";
import App1 from "mf-app-01/App"

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
      <App1 />
    </div>
  )
}

export default App;

