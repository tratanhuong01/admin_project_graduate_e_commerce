import React from "react";
import { Route, Switch } from "react-router-dom";
import HeaderTop from "../../../../components/Index/IndexRight/HeaderTop/HeaderTop";
import category from "../../../../routes/category";

function IndexRight(props) {
  //
  const { show } = props;
  //
  return (
    <div
      className={`${show ? "w-4/5 " : ""} h-screen`}
      style={show ? {} : { width: "calc(100% - 128px)" }}
    >
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
