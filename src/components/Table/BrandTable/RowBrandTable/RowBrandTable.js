import React from "react";

function RowBrandTable(props) {
  //
  const { category, item, index } = props;
  //
  return (
    <tr>
      <td className="p-2">
        <input type="checkbox" className="transform scale-125" />;
      </td>
      <td className="p-2">
        {category.index === 0 ? index + 1 : index + 1 + category.index * 10}
      </td>
      <td className="p-2">{item.nameBrand}</td>
      <td className="p-2 text-center ">
        <img
          src={item.imageBrand}
          alt={"alt"}
          className={`w-24 h-7 px-1 object-cover mx-auto`}
        />
      </td>
    </tr>
  );
}

export default RowBrandTable;
