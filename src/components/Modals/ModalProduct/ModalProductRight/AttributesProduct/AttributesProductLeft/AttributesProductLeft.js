import React, { useEffect, useState } from "react";
import api from "../../../../../../Utils/api";

function AttributesProductLeft(props) {
  //
  const [groups, setGroups] = useState([]);
  const { current, setCurrent, setInfoAttribute } = props;
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await api("groupAttributesAll", "GET", null);
      if (unmounted) return;
      setGroups(result.data);
      setCurrent({ index: 0, data: result.data[0] });
      const data = Object();
      result.data.forEach((group) => {
        data[group.id] = { id: group.id, list: [] };
      });
      setInfoAttribute(data);
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
