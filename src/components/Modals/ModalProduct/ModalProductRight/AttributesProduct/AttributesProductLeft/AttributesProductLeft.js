import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../../../../Utils/api";
import * as productsAction from "../../../../../../actions/products/index";

function AttributesProductLeft(props) {
  //
  const [groups, setGroups] = useState([]);
  const dispatch = useDispatch();
  const { current, setCurrent } = props;
  const { infoAttribute } = useSelector((state) => state.products);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await api("groupAttributesAll", "GET", null);
      if (unmounted) return;
      setGroups(result.data);
      if (infoAttribute === null) {
        setCurrent({ index: 0, data: result.data[0] });
        const data = Object();
        result.data.forEach((group) => {
          data[group.id] = { id: group.id, list: [] };
        });
        dispatch(productsAction.loadInfoAttributeData(data));
      }
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <div className="w-1/4">
      {groups.map((group, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              setCurrent({ index: index, data: group });
            }}
            className={`w-full p-2.5 my-1 flex items-center rounded-lg ${
              current.index === index ? "bg-gray-200" : "hover:bg-gray-200"
            } font-semibold cursor-pointer`}
          >
            {group.nameGroupAttribute}
          </div>
        );
      })}
    </div>
  );
}

export default AttributesProductLeft;
