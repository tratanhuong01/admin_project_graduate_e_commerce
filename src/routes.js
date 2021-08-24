import React from "react";
import * as Config from "./constants/Config";
import AdminLogin from "./pages/AdminLogin";
import AdminIndex from "./pages/AdminIndex";

const routes = [
  {
    path: `${Config.PAGE_ADMIN}/login`,
    exact: true,
    main: () => <AdminLogin />,
    once: false,
  },
  {
    path: `${Config.PAGE_ADMIN}/:slugCategory`,
    exact: true,
    main: () => <AdminIndex />,
    once: false,
  },
];

export default routes;
