import React from "react";
import ContentColor from "../../../Index/IndexRight/General/RowTable/ContentColor/ContentColor";
import RowImage from "../../../Index/IndexRight/General/RowTable/RowImage/RowImage";
import RowTableMain from "../../RowTableMain";

function RowProductTable(props) {
  //
  const { item, index, feature } = props;
  //
  return (
    <RowTableMain item={item} index={index}>
      <td className="p-2">
        <RowImage width={"w-20"} height={"h-28"} src={item.image.src} />
      </td>
      <td className="p-2">{item.nameGroupProduct}</td>
      <td className="p-2">{item.nameLineProduct}</td>
      <td className="p-2 text-center">
        {item.color ? (
          <div
            className="w-10 h-10 rounded-full mx-auto"
            style={{ backgroundColor: item.color.code }}
          ></div>
        ) : (
          "< Trống >"
        )}
      </td>
      <td className="p-2">{item.brand ? item.brand.nameBrand : "< Trống >"}</td>
      <td className="p-2">{item.ram ? item.ram.nameRam : "< Trống >"}</td>
      <td className="p-2">
        {item.memory ? item.memory.nameMemory : "< Trống >"}
      </td>
      <td className="p-2 font-bold">{`${new Intl.NumberFormat().format(
        item.priceInput
      )} đ`}</td>
      <td className="p-2 font-bold">{`${new Intl.NumberFormat().format(
        item.priceOutput
      )} đ`}</td>
      <td className="p-2">
        <span className="rounded-full px-3 p-1 text-sm text-white font-semibold bg-red-500">
          {item.sale} %
        </span>
      </td>
      <td className="p-2 font-bold text-green-800">Electric Home</td>
      <td className="p-2">
        <ContentColor condition={feature.condition.status} typeData={1} />
      </td>
      <td className="p-2">{`${new Intl.NumberFormat().format(
        18364
      )} sản phẩm`}</td>

      <td className="p-2 px-5">
        <button
          className="px-7 py-2 rounded-full text-sm font-semibold border-2 border-solid 
        border-blue-500"
        >
          Sửa
        </button>
      </td>
    </RowTableMain>
  );
}

export default RowProductTable;
