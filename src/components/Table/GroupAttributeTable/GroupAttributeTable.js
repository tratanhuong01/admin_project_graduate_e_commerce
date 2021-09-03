import React from "react";
import Title from "../../Index/IndexRight/General/Title/Title";
import RowGroupAttributeTable from "./RowGroupAttributeTable/RowGroupAttributeTable";

function GroupAttributeTable(props) {
  //
  const { feature, category } = props;
  //
  return (
    <>
      <Title title={feature.table} />
      {category.list &&
        category.list.map((item, index) => {
          return (
            <RowGroupAttributeTable
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

export default GroupAttributeTable;
