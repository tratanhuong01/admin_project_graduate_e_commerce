import React from "react";
import Title from "../../Index/IndexRight/General/Title/Title";
import NotResultTable from "../NotResultTable";
import RowGroupFilterProductTable from "./RowGroupFilterProductTable/RowGroupFilterProductTable";

function GroupFilterProductTable(props) {
  //
  const { feature, category } = props;
  //
  return (
    <>
      <Title title={feature.table} />
      {category.list &&
        (category.list.length <= 0 ? (
          <NotResultTable numRow={4} />
        ) : (
          category.list.map((item, index) => {
            return (
              <RowGroupFilterProductTable
                item={item}
                key={index}
                category={category}
                index={index}
              />
            );
          })
        ))}
    </>
  );
}

export default GroupFilterProductTable;
