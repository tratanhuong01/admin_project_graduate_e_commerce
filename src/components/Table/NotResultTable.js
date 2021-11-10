import React from "react";
import table__not__result from "../../assets/images/table__not__result.png";
function NotResultTable(props) {
  //
  const { numRow } = props;
  //
  return (
    // <tr className="p-2">
    //   <td
    //     colSpan={numRow}
    //     className="py-6 text-gray-600 font-semibold text-center"
    //   >
    //     Không tìm thấy bất kỳ kết quả nào ...{" "}
    //   </td>
    // </tr>
    <tr className="p-2 text-center my-5">
      <td
        colSpan={numRow}
        className="py-6 text-gray-600 font-semibold text-center"
      >
        <img src={table__not__result} className="w-56 mx-auto" alt="" />
        Không tìm thấy bất kỳ kết quả nào ...{" "}
      </td>
    </tr>
  );
}

export default NotResultTable;
