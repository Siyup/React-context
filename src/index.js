import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppMultipleProviders from "./AppMultipleProviders";
import AppSafeContext from "./AppSafeContext";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppMultipleProviders /> */}
    <AppSafeContext />
  </React.StrictMode>,
  document.getElementById("root")
);
