import React from "react";
import ContentColor from "../../../Index/IndexRight/General/RowTable/ContentColor/ContentColor";
import RowTableMain from "../../RowTableMain";

function RowUserTable(props) {
  //
  const { item, index, feature } = props;
  //
  return (
    <RowTableMain item={item} index={index}>
      <td className="p-2">{item.firstName}</td>
      <td className="p-2">{item.lastName}</td>
      <td className="p-2">{item.email}</td>
      <td className="p-2">{item.phone}</td>
      <td className="p-2">{item.birthday.split(" ")[0]}</td>
      <td className="p-2">
        <ContentColor condition={feature.condition.sex} typeData={item.sex} />
      </td>
      <td className="p-2">
        <ContentColor
          condition={feature.condition.isVerifyEmail}
          typeData={item.isVerifyEmail}
        />
      </td>
      <td className="p-2">
        <ContentColor
          condition={feature.condition.isVerifyPhone}
          typeData={item.isVerifyPhone}
        />
      </td>
      <td className="p-2">
        <ContentColor condition={feature.condition.sold} typeData={1} />
      </td>
      <td className="p-2 font-semibold">
        {new Intl.NumberFormat().format(123)} đơn hàng
      </td>
      <td className="p-2">{item.timeCreated}</td>
    </RowTableMain>
  );
}

export default RowUserTable;
