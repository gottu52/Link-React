import { Switch, Route } from "react-router-dom";
import { page1route } from "./Page1Route";
import { Home } from "../Home";
import { Page2 } from "../Page2";
import { page2route, Page2Route } from "./Page2Route";
import { Page404 } from "../Page404";

export const Router = (props) => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {page1route.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {page2route.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
