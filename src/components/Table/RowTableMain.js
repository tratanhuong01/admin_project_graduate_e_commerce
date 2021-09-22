import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as categorysAction from "../../actions/category/index";

function RowTableMain(props) {
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
          type="checkbox"
          className="transform scale-125"
          onChange={(event) => {
            if (event.target.checked)
              dispatch(categorysAction.addItemChoose(item));
            else dispatch(categorysAction.removeItemChoose(item));
          }}
          checked={check()}
        />
      </td>
      <td className="p-2">
        {category.index === 0 ? index + 1 : index + 1 + category.index * 10}
      </td>
      {props.children}
    </tr>
  );
}

export default RowTableMain;
