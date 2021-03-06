import React, { useEffect, useState } from "react";
import ItemNewBest from "../ItemNewBest/ItemNewBest";
import * as dashboardApi from "../../../../../../api/dashboardApi";
import { useSelector } from "react-redux";

function NewBestDashboard(props) {
  //
  const { label, type, content, attribute, specification, Component, handleClick } = props;
  const [data, setData] = useState([]);
  const headers = useSelector((state) => state.headers);
  useEffect(() => {
    //
    let unmounted = false;
    let result = null;
    async function fetch() {
      switch (type) {
        case 0:
          result = await dashboardApi.getUserNew("CUSTOMER", 5, 0, headers);
          break;
        case 1:
          result = await dashboardApi.getBillNew(5, 0, headers);
          break;
        case 2:
          result = await dashboardApi.getContactNew(5, 0, headers);
          break;
        default:
          break;
      }
      if (unmounted) return;
      setData(result.data);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <div className="item__new p-1 bg-white mx-1 w-full ">
      <p className="w-full flex justify-between text-xm font-bold my-2 pl-3">
        <span>{label}</span>
        <span onClick={() => typeof handleClick === "function" && handleClick()}
          className="text-organce text-sm cursor-pointer ">Xem chi tiết</span>
      </p>
      <ul className="w-full flex flex-wrap">
        {data.map((item, index) => {
          return (
            <ItemNewBest
              specification={specification}
              Component={Component}
              key={index}
              item={item}
              content={content}
              attribute={attribute}
            />
          );
        })}
      </ul>
    </div >
  );
}

export default NewBestDashboard;
