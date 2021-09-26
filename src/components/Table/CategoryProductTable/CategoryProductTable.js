import React from "react";
import Title from "../../Index/IndexRight/General/Title/Title";
import LoadingTable from "../LoadingTable";
import NotResultTable from "../NotResultTable";
import RowCategoryProductTable from "./RowCategoryProductTable/RowCategoryProductTable";

function CategoryProductTable(props) {
  //
  const { feature, category } = props;
  //
  return (
    <>
      <Title title={feature.table} />
      <LoadingTable
        data={category.list}
        numRow={4}
        style={{ width: " 500px !important", whiteSpace: " unset!important" }}
      >
        {category.list &&
          (category.list.length <= 0 ? (
            <NotResultTable numRow={4} />
          ) : (
            category.list.map((item, index) => {
              return (
                <RowCategoryProductTable
                  item={item}
                  key={index}
                  category={category}
                  index={index}
                />
              );
            })
          ))}
      </LoadingTable>
    </>
  );
}

export default CategoryProductTable;
