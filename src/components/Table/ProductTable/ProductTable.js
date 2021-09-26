import React from "react";
import Title from "../../Index/IndexRight/General/Title/Title";
import LoadingTable from "../LoadingTable";
import NotResultTable from "../NotResultTable";
import RowProductTable from "./RowProductTable/RowProductTable";

function ProductTable(props) {
  //
  const { feature, category } = props;
  //
  return (
    <>
      <Title title={feature.table} />
      <LoadingTable
        data={category.list}
        numRow={15}
        style={{ width: " 1000px !important", whiteSpace: " unset!important" }}
        type={true}
      >
        {category.list &&
          (category.list.length <= 0 ? (
            <NotResultTable numRow={15} />
          ) : (
            category.list.map((item, index) => {
              return (
                <RowProductTable
                  item={item}
                  key={index}
                  feature={feature}
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

export default ProductTable;
