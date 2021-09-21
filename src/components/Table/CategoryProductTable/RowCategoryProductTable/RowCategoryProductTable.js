import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as categorysAction from "../../../../actions/category/index";

function RowCategoryProductTable(props) {
  //
  const { item, index } = props;
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const check = () => {
    const index = category.choose.findIndex((dt) => dt.id === item.id);
    return index === -1 ? false : true;
  };
  //
  return (
    <tr>
      <td className="p-2">
        <input
          onChange={(event) => {
            if (event.target.checked)
              dispatch(categorysAction.addItemChoose(item));
            else dispatch(categorysAction.removeItemChoose(item));
          }}
          type="checkbox"
          className="transform scale-125"
          checked={check()}
        />
      </td>
      <td className="p-2">
        {category.index === 0 ? index + 1 : index + 1 + category.index * 10}
      </td>
      <td className="p-2">{item.nameCategoryProduct}</td>
      <td className="p-2">{item.slugCategoryProduct}</td>
    </tr>
  );
}

export default RowCategoryProductTable;
