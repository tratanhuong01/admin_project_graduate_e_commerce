import React from "react";
import Title from "../../Index/IndexRight/General/Title/Title";
import RowProductTable from "./RowProductTable/RowProductTable";

function ProductTable(props) {
  //
  const { feature, category } = props;
  //
  return (
    <>
      <Title title={feature.table} />
      {category.list &&
        category.list.map((item, index) => {
          return (
            <RowProductTable
              item={item}
              key={index}
              category={category}
              index={index}
            />
          );
        })}
    </>
  );
}

export default ProductTable;
