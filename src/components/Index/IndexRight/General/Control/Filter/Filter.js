import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as filtersAction from "../../../../../../actions/filter/index";
import * as product from "./product";
function Filter(props) {
  //
  const { table, params } = props;
  const [filter] = useState(props.filter);
  const headers = useSelector((state) => state.headers);
  const [name, setName] = useState(filter[0].data[0].name);
  const [data, setData] = useState(filter[0]);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const showDataLeft = filter.map((item, index) => {
    return (
      <div
        onClick={() => {
          setName(item.data[0].name);
          setData(item);
          setShowLeft(false);
        }}
        className="p-2 w-full"
        key={index}
      >
        {item.name}
      </div>
    );
  });
  const showDataRight = data.data.map((item, index) => {
    return (
      <div
        onClick={() => {
          dispatch(
            filtersAction.addFilterCategoryRequest(
              {
                filters: filters.choose,
                item,
                table,
                index: 0,
                params,
                mainFilters: filters
              },
              headers
            )
          );
          setName(item.name);
          setShowRight(false);
        }}
        className="w-full p-2"
        key={index}
      >
        {item.name}
      </div>
    );
  });
  useEffect(() => {
    //
    let unmounted = false;
    if (unmounted) return;
    if (table === "product") product.queryFilterProduct(filter, headers);
    if (table === "lineProduct")
      product.queryFilterLineproduct(filter, headers);
    if (table === "new") product.queryFilterNews(filter, headers);
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <div className="w-1/2 flex">
      <p className="text-xm font-semibold py-3 mr-4 flex items-center">
        Bộ Lọc
      </p>
      <div
        onClick={() => setShowLeft(!showLeft)}
        className="w-48 p-3 mr-5 font-semibold flex bg-white cursor-pointer relative border-2 border-solid 
        border-gray-200 shadow-lg"
      >
        <p className="items-center">{data.name}</p>
        <i className="fas fa-caret-down absolute right-3 top-4"></i>
        {showLeft && (
          <div
            className="w-48 bg-white border-2 border-solid border-gray-200 py-1 z-50 
          font-semibold absolute top-full -left-0.5 shadow-lg"
          >
            {showDataLeft}
          </div>
        )}
      </div>
      <div
        onClick={() => setShowRight(!showRight)}
        className="w-48 p-3 font-semibold flex bg-white cursor-pointer relative border-2 border-solid 
        border-gray-200 shadow-lg"
      >
        <p className="items-center">{name}</p>
        <i className="fas fa-caret-down absolute right-3 top-4"></i>
        {showRight && (
          <div
            className="w-48 bg-white border-2 border-solid border-gray-200 py-1 z-50 
            font-semibold absolute top-full -left-0.5 shadow-lg max-h-80 overflow-y-auto  scrollbar-css"
          >
            {showDataRight}
          </div>
        )}
      </div>
      <p className="text-xm font-semibold py-3 ml-4 mr-2 text-center flex items-center">
        Sắp xếp
      </p>
    </div>
  );
}

export default Filter;
