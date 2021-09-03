import React from "react";
import Title from "../../Index/IndexRight/General/Title/Title";
import RowCategoryProductTable from "./RowCategoryProductTable/RowCategoryProductTable";

function CategoryProductTable(props) {
  //
  const { feature, category } = props;
  //
  return (
    <>
      <Title title={feature.table} />
      {category.list &&
        category.list.map((item, index) => {
          return (
            <RowCategoryProductTable
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

export default CategoryProductTable;
