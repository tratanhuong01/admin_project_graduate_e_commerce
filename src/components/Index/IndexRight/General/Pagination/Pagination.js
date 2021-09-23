import React from "react";
import ItemPagination from "./ItemPagination/ItemPagination";

function Pagination(props) {
  //
  const { category, table, modal } = props;
  let list = [];
  for (let index = 0; index < Math.ceil(category.length / 10); index++)
    list.push(index);
  //
  return (
    <div className="w-full flex justify-center">
      <ul className="flex justify-center">
        {list.map((item, index) => {
          return (
            <ItemPagination
              modal={modal}
              item={item}
              key={index}
              table={table}
              index={index}
              indexCurrent={category.index}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Pagination;
