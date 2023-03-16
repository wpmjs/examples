import App from "./App1.js"
import React from "react"
import ReactDom from "react-dom"

// import "aaa"
// import "react-refresh/cjs/react-refresh-runtime.development"

var d = document.createElement("div")
document.body.appendChild(d)

ReactDom.render(<App />, d)