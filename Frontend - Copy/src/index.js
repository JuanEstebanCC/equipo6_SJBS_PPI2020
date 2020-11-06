import React from "react";
import ReactDOM from "react-dom";

import PPIcontainer from "./container/PPIcontainer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <PPIcontainer />
  </React.StrictMode>,
  rootElement
);
