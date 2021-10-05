import { Children } from "react";
import { Switch, Route } from "react-router-dom";
import { page1route } from "./Page1Route";

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
                {route.Children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="/page2" render={() => <Page2 />} />
    </Switch>
  );
};
