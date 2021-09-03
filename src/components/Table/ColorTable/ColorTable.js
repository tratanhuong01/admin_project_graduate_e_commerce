import React from "react";
import Title from "../../Index/IndexRight/General/Title/Title";
import RowColorTable from "./RowColorTable/RowColorTable";

function ColorTable(props) {
  //
  const { feature, category } = props;
  //
  return (
    <>
      <Title title={feature.table} />
      {category.list &&
        category.list.map((item, index) => {
          return (
            <RowColorTable
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

export default ColorTable;
