import React, { useState } from "react";
import ModalWrapper from "../ModalWrapper";
import ItemUpdateStatusCategory from "./ItemUpdateStatusCategory/ItemUpdateStatusCategory";

function ModalUpdateStatusCategory(props) {
  //
  const { data, itemCurrent, id, table } = props;
  const [value, setValue] = useState(itemCurrent);
  //
  return (
    <ModalWrapper
      className="shadow-sm border border-solid border-gray-500 px-3 bg-white w-full fixed z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg  sm:w-10/12 md:w-2/3 lg:w-2/3 xl:w-1/3 transform 
      -translate-x-1/2 -translate-y-1/2 overflow-y-auto"
      style={{ maxHeight: 450 }}
      title={data.title}
    >
      <ul className="w-full">
        {data.list &&
          data.list.map((item, index) => (
            <ItemUpdateStatusCategory
              setValue={setValue}
              item={item}
              value={value}
              key={index}
              id={id}
              table={table}
              column={data.column}
            />
          ))}
      </ul>
    </ModalWrapper>
  );
}

export default ModalUpdateStatusCategory;
