import React from "react";
import Title from "../../Index/IndexRight/General/Title/Title";
import NotResultTable from "../NotResultTable";

function TableMain(props) {
  const { feature, category, numRow } = props;
  //
  return (
    <>
      <Title title={feature.table} />
      {!category.loading ? (
        category.list &&
        (category.list.length <= 0 ? (
          <NotResultTable numRow={numRow} />
        ) : (
          props.children
        ))
      ) : (
        <tr>
          <td colSpan={numRow}>
            <div className="w-full p-3 flex items-center justify-center h-28">
              <i className="fas fa-circle-notch fa-spin text-4xl text-organce"></i>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default TableMain;
