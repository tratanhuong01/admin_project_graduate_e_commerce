import React from "react";
import Title from "../../Index/IndexRight/General/Title/Title";
import RowBrandTable from "./RowBrandTable/RowBrandTable";

function BrandTable(props) {
  //
  const { feature, category } = props;
  //
  return (
    <>
      <Title title={feature.table} />
      {category.list &&
        category.list.map((item, index) => {
          return (
            <RowBrandTable
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

export default BrandTable;