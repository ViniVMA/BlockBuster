import React from "react";
import ReactDOM from "react-dom";
import { createServer } from "miragejs";
import App from "./App";
import { GlobalStyle } from "./styles/global.style";
import Model from "miragejs";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
