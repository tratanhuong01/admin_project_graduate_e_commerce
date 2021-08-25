import React from "react";
import Dashboard from "../components/Index/IndexRight/Category/Dashboard/Dashboard";
import * as Config from "../constants/Config";
import BrandScreen from "../screens/brands/BrandScreen";
import ColorScreen from "../screens/colors/ColorScreen";
import MemoryScreen from "../screens/memories/MemoryScreen";
import UserScreen from "../screens/users/UserScreen";

const routes = [
  {
    to: `${Config.BRAND}`,
    exact: true,
    main: () => <BrandScreen />,
    once: false,
  },
  {
    to: `${Config.DASHBOARD}`,
    exact: true,
    main: () => <Dashboard />,
    once: false,
  },
  {
    to: `${Config.COLOR}`,
    exact: true,
    main: () => <ColorScreen />,
    once: false,
  },
  {
    to: `${Config.MEMORY}`,
    exact: true,
    main: () => <MemoryScreen />,
    once: false,
  },
  {
    to: `${Config.USER}`,
    exact: true,
    main: () => <UserScreen />,
    once: false,
  },
];

export default routes;
