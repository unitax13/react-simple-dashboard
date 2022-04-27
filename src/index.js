import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./i18n";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
