import React from "react";
import Title from "../../Index/IndexRight/General/Title/Title";
import RowGroupProductTable from "./RowGroupProductTable/RowGroupProductTable";

function GroupProductTable(props) {
  //
  const { feature, category } = props;
  //
  return (
    <>
      <Title title={feature.table} />
      {category.list &&
        category.list.map((item, index) => {
          return (
            <RowGroupProductTable
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

export default GroupProductTable;