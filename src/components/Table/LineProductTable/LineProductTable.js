import React from "react";
import Title from "../../Index/IndexRight/General/Title/Title";
import NotResultTable from "../NotResultTable";
import RowLineProductTable from "./RowLineProductTable/RowLineProductTable";

function LineProductTable(props) {
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
              <RowLineProductTable
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

export default LineProductTable;
