import React from "react";
import * as Config from "../constants/Config";
import AdminLogin from "../pages/AdminLogin";
import AdminIndex from "../pages/AdminIndex";

const routes = [
  {
    path: `${Config.PAGE_ADMIN}/login`,
    exact: true,
    main: () => <AdminLogin />,
    once: false,
  },
  {
    path: `${Config.PAGE_ADMIN}/:slug1`,
    exact: true,
    main: (match) => <AdminIndex match={match} />,
    once: false,
  },
  {
    path: `${Config.PAGE_ADMIN}/:slug1/:slug2`,
    exact: true,
    main: (match) => <AdminIndex match={match} />,
    once: false,
  },
];

export default routes;
