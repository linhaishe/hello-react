import React, { Component } from "react";
import logo from "../logo.svg";

// import { renderRoutes } from "https://cdn.skypack.dev/react-router-config";
// using an ES6 transpiler, like babel
import { matchRoutes, renderRoutes } from "react-router-config";

import { BrowserRouter, Redirect, Link, Switch } from "react-router-dom";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <img className="logo" src={logo} alt="logo" />
//         <p className="title">react app component</p>
//       </div>
//     );
//   }
// }

{
  /*
class app extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}
*/
}

// For this demo, we are using the UMD build of react-router-dom
// const { HashRouter, Switch, Route, Link, BrowserRouter } = ReactRouterDOM;

const Root = ({ route }) => (
  <div>
    <h1>Root</h1>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
);

const Home = ({ route }) => (
  <div>
    <h2>Home...</h2>
  </div>
);

const Child = ({ route }) => (
  <div>
    <h2>Child</h2>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes, { someProp: "these extra props are optional" })}
  </div>
);

const GrandChild = ({ someProp }) => (
  <div>
    <h3>Grand Child</h3>
    <div>{someProp}</div>
  </div>
);

const TestHome = () => {
  return <div>TextHome</div>;
};

const routes = [
  // 如果将/home放在Root对象的下边，则不会显示了。
  { path: "/home", exact: true, component: TestHome },
  {
    component: Root,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home,
      },
      {
        path: "/child/:id",
        component: Child,
        routes: [
          {
            path: "/child/:id/grand-child",
            component: GrandChild,
          },
        ],
      },
    ],
  },

  // {
  //   path: "/home",
  //   // exact: true,
  //   component: Home,
  // },
];

function App() {
  return (
    <BrowserRouter>
      {/* kick it all off with the root route */}
      <div>
        <Link to="/">Roothome</Link>
        |||||
        <Link to="/home">toTesthome</Link> |||||
        <Link to="/child/8">/child/8</Link> |||||
        <Link to="/child/8/grand-child">to/child/8/grand-child</Link>
      </div>
      {renderRoutes(routes)}
      {/* <TestHome></TestHome> */}
    </BrowserRouter>
  );
}

export default App;
