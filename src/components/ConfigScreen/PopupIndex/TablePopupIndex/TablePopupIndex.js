import React from "react";
import { useSelector } from "react-redux";
import Title from "../../../Index/IndexRight/General/Title/Title";
import NotResultTable from "../../../Table/NotResultTable";
import Table from "../../../Table/Table";
import feature from "./feature";
import RowTablePopupIndex from "./RowTablePopupIndex/RowTablePopupIndex";

function TablePopupIndex(props) {
  //
  const category = useSelector((state) => state.category);
  //
  return (
    <Table category={category} feature={feature} modal={false}>
      <Title title={feature.table} />
      {category.list &&
        (category.list.length <= 0 ? (
          <NotResultTable numRow={3} />
        ) : (
          category.list.map((item, index) => {
            return (
              <RowTablePopupIndex
                item={item}
                key={index}
                category={category}
                index={index}
              />
            );
          })
        ))}
    </Table>
  );
}

export default TablePopupIndex;
