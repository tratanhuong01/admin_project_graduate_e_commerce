import React from "react";

function RowUserTable(props) {
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
      <td className="p-2">{item.firstName}</td>
      <td className="p-2">{item.lastName}</td>
      <td className="p-2">{item.email}</td>
      <td className="p-2">{item.phone}</td>
      <td className="p-2">{item.birthday.split(" ")[0]}</td>
      <td className="p-2">{item.sex}</td>
      <td className="p-2">{item.isVerifyEmail}</td>
      <td className="p-2">{item.isVerifyPhone}</td>
      <td className="p-2"></td>
      <td className="p-2"></td>
    </tr>
  );
}

export default RowUserTable;
