import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import main from "./routes/main";
import "./index.css";
function App(props) {
  const showAllLinks = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  };

  return (
    <Router>
      <Switch>{showAllLinks(main)}</Switch>
    </Router>
  );
}

export default App;
