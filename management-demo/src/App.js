import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import "./App.scss";

import Login from "./views/Login/Login";
import Home from "./views/Home/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        {/* 自动定向，因为有两个路由，为了不让页面空白，选择自动选择路由显示 */}
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default App;
