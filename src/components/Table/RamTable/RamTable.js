import React from "react";
import Title from "../../Index/IndexRight/General/Title/Title";
import RowRamTable from "./RowRomTable/RowRamTable";

function RamTable(props) {
  //
  const { feature, category } = props;
  //
  return (
    <>
      <Title title={feature.table} />
      {category.list &&
        category.list.map((item, index) => {
          return (
            <RowRamTable
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

export default RamTable;
