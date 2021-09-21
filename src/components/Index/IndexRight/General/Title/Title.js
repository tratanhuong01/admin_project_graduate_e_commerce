import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as categorysAction from "../../../../../actions/category/index";

function Title(props) {
  //
  const { title } = props;
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  //
  return (
    <tr>
      {title.map((item, index) => {
        if (item.name === "CBX")
          return (
            <th className="p-2" key={index}>
              <input
                type="checkbox"
                className="transform scale-125"
                onChange={(event) => {
                  if (!event.target.checked)
                    dispatch(categorysAction.removeItemChooseAll());
                  else dispatch(categorysAction.addItemChooseAll());
                }}
                checked={
                  category.list &&
                  category.choose.length === category.list.length
                    ? true
                    : false
                }
              />
            </th>
          );
        return (
          <th className="p-2" key={index}>
            {item.name}
          </th>
        );
      })}
    </tr>
  );
}

export default Title;
