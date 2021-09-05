import React, { useState } from "react";
import { useSelector } from "react-redux";
import AttributesProductLeft from "./AttributesProductLeft/AttributesProductLeft";
import AttributesProductRight from "./AttributesProductRight/AttributesProductRight";

function AttributesProduct(props) {
  //
  const products = useSelector((state) => state.products);
  const [current, setCurrent] = useState(0);
  //
  return (
    <div
      className="w-11/12 mx-auto overflow-y-auto scrollbar-css"
      style={{
        height: 530,
        maxHeight: 530,
      }}
    >
      <div className="my-3 text-sm text-gray-600 font-semibold">
        Để hiện thẻ thông tin thuộc tính dưới dạng danh sách vui lòng thêm{" "}
        <b>@</b> trước mỗi giá trị thuộc tính.
      </div>
      <div className="w-full flex">
        <AttributesProductLeft
          current={current}
          setCurrent={setCurrent}
          infoAttribute={products.infoAttribute}
        />
        <AttributesProductRight
          current={current}
          infoAttribute={products.infoAttribute}
        />
      </div>
    </div>
  );
}

export default AttributesProduct;
