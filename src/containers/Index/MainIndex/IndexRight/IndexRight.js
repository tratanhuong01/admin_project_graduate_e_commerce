import React from "react";
import { Route, Switch } from "react-router-dom";
import HeaderTop from "../../../../components/Index/IndexRight/HeaderTop/HeaderTop";
import category from "../../../../routes/category";

function IndexRight(props) {
  //
  //
  return (
    <div className="w-4/5 h-screen ">
      <HeaderTop />
      <Switch>
        {category.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.to}
              exact={route.exact}
              component={route.main}
            />
          );
        })}
      </Switch>
    </div>
  );
}

export default IndexRight;
