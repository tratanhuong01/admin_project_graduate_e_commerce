import React, { useEffect } from "react";

function LoadingTable(props) {
  //
  const { data, numRow, style, type } = props;
  useEffect(() => {}, [data]);
  //
  return data ? (
    props.children
  ) : (
    <tr>
      <td colSpan={numRow} className="h-32 text-center" style={style}>
        <span
          className={`fas fa-circle-notch fa-spin text-4xl text-organce ${
            type ? "mr-32" : ""
          }`}
        ></span>
      </td>
    </tr>
  );
}

export default LoadingTable;
