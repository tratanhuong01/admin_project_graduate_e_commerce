import React from "react";

function RowTable(props) {
  return (
    <tr>
      <td className="p-2">1</td>
      <td className="p-2">1000000003</td>
      <td className="p-2">Anh</td>
      <td className="p-2">Hoang</td>
      <td className="p-2">wfy20183@eoopy.com</td>
      <td className="p-2"></td>
      <td className="p-2">1990-01-01</td>
      <td className="p-2">
        <span
          className="bg-yellow-500 px-3 py-1.5 text-sm rounded-3xl 
          font-bold text-white"
        >
          Đang xác minh
        </span>
      </td>
      <td className="p-2">
        <span
          className="cursor-pointer  bg-red-500 px-3 py-1.5 text-sm rounded-3xl 
          font-bold text-white"
        >
          Khóa
        </span>
      </td>
      <td className="p-2">
        <span
          className="cursor-pointer bg-blue-500 px-3 py-1.5 text-sm rounded-3xl 
          font-bold text-white"
        >
          Nam
        </span>
      </td>
      <td className="p-2">2021-05-02 19:47:59</td>
      <td className="p-2">
        <span
          className="bg-red-500 px-3 py-1.5 text-sm rounded-3xl 
          font-bold text-white"
        >
          Offline
        </span>
      </td>
    </tr>
  );
}

export default RowTable;
