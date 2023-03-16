import App from "./App2"
import React from "react"
import ReactDom from "react-dom"

var d = document.createElement("div")
document.body.appendChild(d)

ReactDom.render(<App />, d)