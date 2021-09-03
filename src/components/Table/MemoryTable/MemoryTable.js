import React from "react";
import Title from "../../Index/IndexRight/General/Title/Title";
import RowMemoryTable from "./RowMemoryTable/RowMemoryTable";

function MemoryTable(props) {
  //
  const { feature, category } = props;
  //
  return (
    <>
      <Title title={feature.table} />
      {category.list &&
        category.list.map((item, index) => {
          return (
            <RowMemoryTable
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

export default MemoryTable;
