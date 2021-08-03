import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MyNavLink from "../../components/my-nav-link";
import News from "./News/News";
import Message from "./Message/Message";

export default function Home() {
  return (
    <div>
      <h2>Home组件内容</h2>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <MyNavLink to="/home/news">News</MyNavLink>
          </li>
          <li>
            <MyNavLink to="/home/message">Message</MyNavLink>
          </li>
        </ul>
        {/* 注册路由 */}
        {/* /home/news，因为最开始的时候/home路由匹配了，才能继续匹配/home/news的路径，潜逃路由不能开启严格模式 */}
        <Switch>
          <Route path="/home/news" component={News} />
          <Route path="/home/message" component={Message} />
          <Redirect to="/home/news" />
        </Switch>
      </div>
    </div>
  );
}
