import React from "react";
import Title from "../../Index/IndexRight/General/Title/Title";
import NotResultTable from "../NotResultTable";

function TableMain(props) {
  const { feature, category, numRow } = props;
  //
  return (
    <>
      <Title title={feature.table} />
      {category.list &&
        (category.list.length <= 0 ? (
          <NotResultTable numRow={numRow} />
        ) : (
          props.children
        ))}
    </>
  );
}

export default TableMain;
