import React, { useState } from "react";
import CloseModal from "../../CloseModal/CloseModal";
import ItemUpdateStatusCategory from "./ItemUpdateStatusCategory/ItemUpdateStatusCategory";

function ModalUpdateStatusCategory(props) {
  //
  const { data, itemCurrent, id, table } = props;
  const [value, setValue] = useState(itemCurrent);
  //
  return (
    <div
      className="shadow-sm border border-solid border-gray-500 py-3 pl-1.5 pr-1.5 pt-0 bg-white w-full fixed z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg  sm:w-10/12 md:w-2/3 lg:w-2/3 xl:w-1/3 transform 
      -translate-x-1/2 -translate-y-1/2 overflow-y-auto"
      style={{ maxHeight: 450 }}
    >
      <div className="w-full text-center relative h-16">
        <p className="text-2xl font-bold p-2.5 dark:text-white">{data.title}</p>
        <CloseModal />
        <hr />
      </div>
      <ul className="w-full p-2">
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
    </div>
  );
}

export default ModalUpdateStatusCategory;
