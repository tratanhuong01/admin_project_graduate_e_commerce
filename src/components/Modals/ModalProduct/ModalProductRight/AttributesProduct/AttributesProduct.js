import React, { useState } from "react";
import AttributesProductLeft from "./AttributesProductLeft/AttributesProductLeft";
import AttributesProductRight from "./AttributesProductRight/AttributesProductRight";

function AttributesProduct(props) {
  //
  const [current, setCurrent] = useState(0);
  const [infoAttribute, setInfoAttribute] = useState(null);
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
          infoAttribute={infoAttribute}
          setInfoAttribute={setInfoAttribute}
        />
        <AttributesProductRight
          current={current}
          infoAttribute={infoAttribute}
          setInfoAttribute={setInfoAttribute}
        />
      </div>
    </div>
  );
}

export default AttributesProduct;
