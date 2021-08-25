import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../components/Index/IndexRight/General/Table/Table";
import futures from "./futures";
import * as categorysAction from "../../actions/category/index";
import Date from "../../components/Index/IndexRight/General/Date/Date";
import FileDown from "../../components/Index/IndexRight/General/FileDown/FileDown";
import Control from "../../components/Index/IndexRight/General/Control/Control";
import Pagination from "../../components/Index/IndexRight/General/Pagination/Pagination";

function UserScreen(props) {
  //
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    //
    dispatch(categorysAction.loadListCategoryRequest(`${futures.nameTable}s`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    category.list && (
      <div
        className="w-full p-5 bg-gray-100 overflow-y-auto h-full scrollbar-css"
        style={{ height: "calc(100% - 76px)", maxHeight: "calc(100% - 76px)" }}
      >
        <div className="w-full flex py-2 relative">
          <div className="mr-10 flex">
            <p className="text-2xl font-bold flex items-center">
              Quản lí người dùng
            </p>
          </div>
          <div className="w-auto flex items-center justify-end">
            <Date />
            <FileDown />
          </div>
        </div>
        <Control type={futures.type} data={futures} />
        <div className="w-full  py-3">
          <>
            <Table
              type={futures.type}
              title={futures.table}
              list={category.list}
            />
            <Pagination type={futures.type} />
          </>
        </div>
      </div>
    )
  );
}

export default UserScreen;
