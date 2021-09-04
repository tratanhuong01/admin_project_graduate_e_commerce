import React from "react";
import Title from "../../Index/IndexRight/General/Title/Title";
import RowNewsTable from "./RowNewsTable/RowNewsTable";

function NewsTable(props) {
  //
  const { feature, category } = props;
  //
  return (
    <>
      <Title title={feature.table} />
      {category.list &&
        category.list.map((item, index) => {
          return (
            <RowNewsTable
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

export default NewsTable;
