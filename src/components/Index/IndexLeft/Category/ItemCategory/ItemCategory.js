import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import * as categorysAction from "../../../../..//actions/category/index";
function ItemCategory(props) {
  //
  const location = useLocation();
  const { item, setCategoryCurrent, match } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const [show, setShow] = useState({
    icon: "bx bx-chevron-right",
    status:
      item.child.findIndex((dt) => dt.to === location.pathname) !== -1
        ? true
        : false,
  });
  useEffect(() => {}, [match]);
  //
  return (
    <>
      <li
        onClick={() => {
          setCategoryCurrent(item.id);
          item.child.length > 0 &&
            setShow({
              icon: show.status ? "bx bx-chevron-right" : "bx bx-chevron-down",
              status: !show.status,
            });
          if (item.child.length === 0) {
            dispatch(categorysAction.resetCategory());
            history.push(item.to);
          }
        }}
        className={`w-full border-solid cursor-pointer flex pl-5 h-12 my-1 items-center 
        rounded-lg relative  font-semibold ${
          item.to === location.pathname
            ? "border-l-4 border-gray-200 bg-gray-200 text-gray-800"
            : "border-white text-gray-800 hover:bg-gray-200"
        }`}
      >
        <span className={`${item.icon} text-xl mr-3 flex `}></span>
        <span className="hidden lg:flex">{item.name}</span>
        <span
          className={`${show.icon} absolute top-3.5 text-xl right-3`}
        ></span>
      </li>
      {show.status && (
        <div className="w-full hidden lg:block">
          {item.child.length > 0 &&
            item.child.map((dt, index) => {
              return (
                <div
                  onClick={() => {
                    dispatch(categorysAction.resetCategory());
                    history.push(dt.to);
                  }}
                  className={`w-full text-gray-800 flex my-0.5 h-11 items-center cursor-pointer 
                  font-semibold`}
                  key={index}
                >
                  <span
                    className={`${
                      show && dt.to === location.pathname
                        ? "bx bx-radio-circle-marked text-organce"
                        : "bx bx-radio-circle"
                    }  text-2xl flex mx-5`}
                  ></span>
                  <span className="flex">{dt.name}</span>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
}

export default ItemCategory;
