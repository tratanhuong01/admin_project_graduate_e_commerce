import React from "react";

function NotResultTable(props) {
  //
  const { numRow } = props;
  //
  return (
    <tr className="p-2">
      <td
        colSpan={numRow}
        className="py-6 text-gray-600 font-semibold text-center"
      >
        Không tìm thấy bất kỳ kết quả nào ...{" "}
      </td>
    </tr>
  );
}

export default NotResultTable;
