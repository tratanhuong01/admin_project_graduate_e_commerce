import React, { useState } from "react";
import { useSelector } from "react-redux";
import AttributesProductLeft from "./AttributesProductLeft/AttributesProductLeft";
import AttributesProductRight from "./AttributesProductRight/AttributesProductRight";

function AttributesProduct(props) {
  //
  const [current, setCurrent] = useState(0);
  const products = useSelector((state) => state.products);
  //
  return (
    <div
      className="w-11/12 mx-auto overflow-y-auto scrollbar-css"
      style={{
        height: 530,
        maxHeight: 530,
      }}
    >
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
