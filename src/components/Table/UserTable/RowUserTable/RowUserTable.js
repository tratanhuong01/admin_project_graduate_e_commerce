import React from "react";
import ContentColor from "../../../Index/IndexRight/General/RowTable/ContentColor/ContentColor";

function RowUserTable(props) {
  //
  const { category, item, index, feature } = props;
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
      <td className="p-2">8453 sản phẩm</td>
      <td className="p-2">{item.timeCreated}</td>
    </tr>
  );
}

export default RowUserTable;
