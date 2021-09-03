import React from "react";
import Title from "../../Index/IndexRight/General/Title/Title";
import RowAttributeTable from "./RowAttributeTable/RowAttributeTable";

function AttributeTable(props) {
  //
  const { feature, category } = props;
  //
  return (
    <>
      <Title title={feature.table} />
      {category.list &&
        category.list.map((item, index) => {
          return (
            <RowAttributeTable
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

export default AttributeTable;
