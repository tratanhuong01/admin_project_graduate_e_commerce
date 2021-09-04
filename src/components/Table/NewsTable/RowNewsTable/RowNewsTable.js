import React from "react";
import RowImage from "../../../Index/IndexRight/General/RowTable/RowImage/RowImage";

function RowNewsTable(props) {
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
      <td className="p-2">
        <RowImage width={"w-28"} height={"h-20"} src={item.thumbnail} />
      </td>
      <td className="p-2">{item.describeSmall.substring(0, 50) + "..."}</td>
      <td className="p-2">{item.title.substring(0, 50) + "..."}</td>
      <td className="p-2 font-semibold">
        {item.categoryNews.nameCategoryNews}
      </td>
      <td className="p-2">
        {item.userNews.firstName + " " + item.userNews.lastName}
      </td>
      <td className="p-2 font-semibold">{`${new Intl.NumberFormat().format(
        item.view
      )} lượt xem`}</td>
      <td className="p-2 font-semibold">{`${new Intl.NumberFormat().format(
        4234
      )} bình luận`}</td>
      <td className="p-2 px-5">
        <button
          className="px-7 py-2 rounded-full text-sm font-semibold border-2 border-solid 
        border-blue-500"
        >
          Sửa
        </button>
      </td>
    </tr>
  );
}

export default RowNewsTable;
