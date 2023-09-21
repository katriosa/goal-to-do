import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.render(<App />, rootElement);
} else {
  console.error("Element with id 'root' not found.");
}
