import React from "react";
import Dashboard from "../components/Index/IndexRight/Category/Dashboard/Dashboard";
import * as Config from "../constants/Config";
import AttributeScreen from "../screens/AttributeScreen/AttributeScreen";
import BrandScreen from "../screens/BrandScreen/BrandScreen";
import ColorScreen from "../screens/ColorScreen/ColorScreen";
import GroupAttributeScreen from "../screens/GroupAttributeScreen/GroupAttributeScreen";
import MemoryScreen from "../screens/MemoryScreen/MemoryScreen";
import CategoryProductScreen from "../screens/Product/CategoryProductScreen/CategoryProductScreen";
import GroupProductScreen from "../screens/Product/GroupProductScreen/GroupProductScreen";
import LineProductScreen from "../screens/Product/LineProductScreen/LineProductScreen";
import ProductListScreen from "../screens/Product/ProductListScreen/ProductListScreen";
import UserScreen from "../screens/UserScreen/UserScreen";
import GroupFilterProductScreen from "../screens/GroupFilterProductScreen/GroupFilterProductScreen";
import FunctionProductScreen from "../screens/FunctionProductScreen/FunctionProductScreen";
import OrderScreen from "../screens/OrderScreen/OrderScreen";
import NewsScreen from "../screens/NewsScreen/NewsScreen";
import SupportLiveScreen from "../screens/SupportLiveScreen/SupportLiveScreen";
import RamScreen from "../screens/RamScreen/RamScreen";

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
    to: `${Config.MEMORY_INSIDE}`,
    exact: true,
    main: () => <MemoryScreen />,
    once: false,
  },
  {
    to: `${Config.MEMORY_OUTSIDE}`,
    exact: true,
    main: () => <RamScreen />,
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
    to: `${Config.GROUP_FILTER_PRODUCT}`,
    exact: true,
    main: () => <GroupFilterProductScreen />,
    once: false,
  },
  {
    to: `${Config.GROUP_ATTRIBUTE}`,
    exact: true,
    main: () => <GroupAttributeScreen />,
    once: false,
  },
  {
    to: `${Config.FUNCTION_PRODUCT}`,
    exact: true,
    main: () => <FunctionProductScreen />,
    once: false,
  },
  {
    to: `${Config.BILL}`,
    exact: true,
    main: () => <OrderScreen />,
    once: false,
  },
  {
    to: `${Config.NEWS_LIST}`,
    exact: true,
    main: () => <NewsScreen />,
    once: false,
  },
  {
    to: `${Config.SUPPORT_LIVE}`,
    exact: true,
    main: () => <SupportLiveScreen />,
    once: false,
  },
];

export default routes;
