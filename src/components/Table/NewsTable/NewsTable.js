import React from "react";
import Title from "../../Index/IndexRight/General/Title/Title";
import NotResultTable from "../NotResultTable";
import RowNewsTable from "./RowNewsTable/RowNewsTable";

function NewsTable(props) {
  //
  const { feature, category } = props;
  //
  return (
    <>
      <Title title={feature.table} />
      {category.list &&
        (category.list.length <= 0 ? (
          <NotResultTable numRow={8} />
        ) : (
          category.list.map((item, index) => {
            return (
              <RowNewsTable
                table={feature.nameTable}
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

export default NewsTable;
