import React from "react";
import Title from "../../Index/IndexRight/General/Title/Title";
import NotResultTable from "../NotResultTable";
import RowFunctionProductTable from "./RowFunctionProductTable/RowFunctionProductTable";

function FunctionProductTable(props) {
  //
  const { feature, category } = props;
  //
  return (
    <>
      <Title title={feature.table} />
      {category.list &&
        (category.list.length <= 0 ? (
          <NotResultTable numRow={5} />
        ) : (
          category.list.map((item, index) => {
            return (
              <RowFunctionProductTable
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

export default FunctionProductTable;
