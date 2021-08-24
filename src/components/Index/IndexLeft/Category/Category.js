import React, { useState } from "react";
import ItemCategory from "./ItemCategory/ItemCategory";

function Category(props) {
  const category = [
    {
      id: 0,
      name: "Tổng quan",
      icon: "bx bx-home-circle",
      type: "dashboard",
      child: [],
    },
    {
      id: 2,
      name: "Khách hàng",
      icon: "bx bx-user",
      child: [
        {
          id: 0,
          name: "Khách hàng",
          type: "customer",
          label: "Quản lí khách hàng",
        },
        {
          id: 1,
          name: "Nhà cung cấp",
          type: "manufacture",
          label: "Quản lí nhà cung cấp",
        },
      ],
    },
    {
      id: 3,
      name: "Đơn hàng",
      icon: "bx bx-detail",
      type: "bill",
      label: "Quản lí đơn hàng",
      child: [],
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
        },
        {
          id: 1,
          name: "Danh mục sản phẩm",
          label: "Quản lí danh mục sản phẩm",
          type: "categoryProduct",
        },
        {
          id: 2,
          name: "Nhóm sản phẩm",
          label: "Quản lí nhóm sản phẩm",
          type: "groupProduct",
        },
        {
          id: 3,
          name: "Dòng sản phẩm",
          label: "Quản lí dòng sản phẩm",
          type: "lineProduct",
        },
      ],
    },
    {
      id: 5,
      name: "Khuyến mãi",
      icon: "bx bx-gift",
      child: [
        {
          id: 0,
          name: "Mã giảm giá",
          label: "Quản lí mã giảm giá",
          type: "codeSale",
        },
        {
          id: 1,
          name: "Sản phẩm giảm giá",
          label: "Quản lí sản phẩm giảm giá",
          type: "productSale",
        },
        {
          id: 3,
          name: "Chương trình khuyến mãi",
          label: "Quản lí sản phẩm giảm giá",
          type: "promotions",
        },
      ],
    },
    {
      id: 6,
      name: "Thiết lập",
      icon: "fas fa-cog",
      type: "config",
      child: [],
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
        },
        {
          id: 1,
          name: "Kích thước",
          type: "memory",
        },
        {
          id: 2,
          name: "Thương hiệu",
          type: "brand",
        },
      ],
    },
    {
      id: 8,
      name: "Bài viết",
      icon: "bx bx-pen",
      type: "news",
      child: [],
    },
    {
      id: 9,
      name: "Liên hệ",
      icon: "bx bx-current-location",
      type: "contact",
      child: [],
    },
  ];
  const [categoryCurrent, setCategoryCurrent] = useState(0);
  const showCategorys = category.map((item, index) => {
    return (
      <ItemCategory
        item={item}
        key={index}
        id={categoryCurrent}
        setCategoryCurrent={setCategoryCurrent}
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
