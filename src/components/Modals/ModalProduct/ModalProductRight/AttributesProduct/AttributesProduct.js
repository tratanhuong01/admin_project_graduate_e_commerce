import React, { useState } from "react";
import AttributesProductLeft from "./AttributesProductLeft/AttributesProductLeft";
import AttributesProductRight from "./AttributesProductRight/AttributesProductRight";

function AttributesProduct(props) {
  //
  const [current, setCurrent] = useState(0);
  //
  return (
    <>
      <div className="my-3 text-sm text-gray-600 font-semibold">
        Để hiện thẻ thông tin thuộc tính dưới dạng danh sách vui lòng thêm{" "}
        <b>@</b> trước mỗi giá trị thuộc tính.
      </div>
      <div className="w-full flex">
        <AttributesProductLeft current={current} setCurrent={setCurrent} />
        <AttributesProductRight current={current} />
      </div>
    </>
  );
}

export default AttributesProduct;
