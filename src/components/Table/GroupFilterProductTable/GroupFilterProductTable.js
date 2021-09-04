import React from "react";
import Title from "../../Index/IndexRight/General/Title/Title";
import RowGroupFilterProductTable from "./RowGroupFilterProductTable/RowGroupFilterProductTable";

function GroupFilterProductTable(props) {
  //
  const { feature, category } = props;
  //
  return (
    <>
      <Title title={feature.table} />
      {category.list &&
        category.list.map((item, index) => {
          return (
            <RowGroupFilterProductTable
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

export default GroupFilterProductTable;
