import React from "react";
import ReactDOM from "react-dom";
// import {render} from 'react-dom'
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./components/App";

import "./index.css";

ReactDOM.render(
  //一旦用了router,必须用路由组件包裹起来，用路由组件管理整个应用
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  /*<HashRouter>
      <App />
    </HashRouter>*/
  document.getElementById("root")
);
