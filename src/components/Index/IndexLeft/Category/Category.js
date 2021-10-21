import React, { useState } from "react";
import ItemCategory from "./ItemCategory/ItemCategory";
import * as Config from "../../../../constants/Config";
function Category(props) {
  const category = [
    {
      id: 0,
      name: "Tổng quan",
      icon: "bx bx-home-circle",
      type: "dashboard",
      child: [],
      to: Config.DASHBOARD,
    },
    {
      id: 2,
      name: "Khách hàng",
      icon: "bx bx-user",
      child: [],
      to: Config.USER,
    },
    {
      id: 3,
      name: "Đơn hàng",
      icon: "bx bx-detail",
      type: "bill",
      label: "Quản lí đơn hàng",
      child: [],
      to: Config.BILL,
    },
    {
      id: 4,
      name: "Sản phẩm",
      icon: "bx bxl-product-hunt",
      child: [
        {
          id: 0,
          name: "Danh sách sản phẩm",
          label: "Quản lí sản phẩm",
          type: "product",
          to: Config.LIST_PRODUCT,
        },
        {
          id: 1,
          name: "Danh mục sản phẩm",
          label: "Quản lí danh mục sản phẩm",
          type: "categoryProduct",
          to: Config.CATEGORY_PRODUCT,
        },
        {
          id: 2,
          name: "Nhóm sản phẩm",
          label: "Quản lí nhóm sản phẩm",
          type: "groupProduct",
          to: Config.GROUP_PRODUCT,
        },
        {
          id: 3,
          name: "Dòng sản phẩm",
          label: "Quản lí dòng sản phẩm",
          type: "lineProduct",
          to: Config.LINE_PRODUCT,
        },
        {
          id: 7,
          name: "Chức năng sản phẩm",
          label: "Quản lí chức năng sản phẩm",
          type: "functionProduct",
          to: Config.FUNCTION_PRODUCT,
        },
        {
          id: 5,
          name: "Nhóm thuộc tính",
          label: "Quản lí nhóm thuộc tính",
          type: "groupAttribute",
          to: Config.GROUP_ATTRIBUTE,
        },
        {
          id: 5,
          name: "Thuộc tính",
          label: "Quản lí thuộc tính",
          type: "attribute",
          to: Config.ATTRIBUTE,
        },
        {
          id: 6,
          name: "Nhóm bộ lọc sản phẩm",
          label: "Quản lí bộ lọc sản phẩm",
          type: "groupFilterProduct",
          to: Config.GROUP_FILTER_PRODUCT,
        },
      ],
    },
    {
      id: 5,
      name: "Mã giảm giá",
      icon: "bx bx-gift",
      child: [],
      to: "ma-giam-gia",
    },
    {
      id: 6,
      name: "Thiết lập",
      icon: "fas fa-cog",
      type: "config",
      child: [],
      to: "thiet-lap",
    },
    {
      id: 7,
      name: "Danh mục",
      icon: "bx bxs-category-alt",
      child: [
        {
          id: 0,
          name: "Màu sắc",
          type: "color",
          to: Config.COLOR,
        },
        {
          id: 1,
          name: "Bộ nhớ trong",
          type: "memory",
          to: Config.MEMORY_INSIDE,
        },
        {
          id: 2,
          name: "Thương hiệu",
          type: "brand",
          to: Config.BRAND,
        },
        {
          id: 2,
          name: "Bộ nhớ ngoài",
          type: "rom",
          to: Config.MEMORY_OUTSIDE,
        },
      ],
    },
    {
      id: 8,
      name: "Bài viết",
      icon: "bx bx-pen",
      type: "news",
      child: [],
      to: Config.NEWS_LIST,
    },
    {
      id: 9,
      name: "Liên hệ",
      icon: "bx bx-current-location",
      type: "contact",
      child: [],
      to: "lien-he",
    },
    {
      id: 10,
      name: "Hổ trợ trực tuyến",
      icon: "bx bxs-chat",
      type: "support",
      child: [],
      to: Config.SUPPORT_LIVE,
    },
  ];
  const { match, show } = props;
  const [categoryCurrent, setCategoryCurrent] = useState(0);
  const showCategorys = category.map((item, index) => {
    return (
      <ItemCategory
        showData={show}
        item={item}
        key={index}
        id={categoryCurrent}
        setCategoryCurrent={setCategoryCurrent}
        match={match}
      />
    );
  });

  return (
    <div className="w-full">
      <ul className="w-full py-1 px-3">{showCategorys}</ul>
    </div>
  );
}

export default Category;
