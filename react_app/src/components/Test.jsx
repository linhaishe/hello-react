// For this demo, we are using the UMD build of react-router-dom
const { HashRouter, Switch, Route, Link, BrowserRouter } = ReactRouterDOM;

import { renderRoutes } from "https://cdn.skypack.dev/react-router-config";

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

const Test = () => <div>text</div>;

const routes = [
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
];

ReactDOM.render(
  <BrowserRouter>
    {/* kick it all off with the root route */}

    {renderRoutes(routes)}
  </BrowserRouter>,
  document.getElementById("root")
);
