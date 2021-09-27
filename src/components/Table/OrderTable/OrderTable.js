import React from "react";
import Title from "../../Index/IndexRight/General/Title/Title";
import NotResultTable from "../NotResultTable";
import RowOrderTable from "./RowOrderTable/RowOrderTable";

function OrderTable(props) {
  //
  const { feature, category } = props;
  //
  return (
    <>
      <Title title={feature.table} />
      {category.list &&
        (category.list.length <= 0 ? (
          <NotResultTable numRow={12} />
        ) : (
          category.list.map((item, index) => {
            return (
              <RowOrderTable
                item={item}
                key={index}
                category={category}
                index={index}
                feature={feature}
              />
            );
          })
        ))}
    </>
  );
}

export default OrderTable;
