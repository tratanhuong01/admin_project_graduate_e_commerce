import React from "react";
import Dashboard from "../components/Index/IndexRight/Category/Dashboard/Dashboard";
import * as Config from "../constants/Config";
import AttributeScreen from "../screens/attribute/AttributeScreen";
import BrandScreen from "../screens/brands/BrandScreen";
import ColorScreen from "../screens/colors/ColorScreen";
import GroupAttributeScreen from "../screens/groupAttribute/GroupAttributeScreen";
import MemoryScreen from "../screens/memories/MemoryScreen";
import CategoryProductScreen from "../screens/products/CategoryProductScreen/CategoryProductScreen";
import GroupProductScreen from "../screens/products/GroupProductScreen/GroupProductScreen";
import LineProductScreen from "../screens/products/LineProductScreen/LineProductScreen";
import ProductListScreen from "../screens/products/ProductListScreen/ProductListScreen";
import UserScreen from "../screens/users/UserScreen";
import ValueAttributeScreen from "../screens/valueAttribute/ValueAttributeScreen";

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
  {
    to: `${Config.LIST_PRODUCT}`,
    exact: true,
    main: () => <ProductListScreen />,
    once: false,
  },
  {
    to: `${Config.LINE_PRODUCT}`,
    exact: true,
    main: () => <LineProductScreen />,
    once: false,
  },
  {
    to: `${Config.GROUP_PRODUCT}`,
    exact: true,
    main: () => <GroupProductScreen />,
    once: false,
  },
  {
    to: `${Config.CATEGORY_PRODUCT}`,
    exact: true,
    main: () => <CategoryProductScreen />,
    once: false,
  },
  {
    to: `${Config.ATTRIBUTE}`,
    exact: true,
    main: () => <AttributeScreen />,
    once: false,
  },
  {
    to: `${Config.VALUE_ATTRIBUTE}`,
    exact: true,
    main: () => <ValueAttributeScreen />,
    once: false,
  },
  {
    to: `${Config.GROUP_ATTRIBUTE}`,
    exact: true,
    main: () => <GroupAttributeScreen />,
    once: false,
  },
];

export default routes;
