import React, { useEffect } from "react";
import Control from "../General/Control/Control";
import Pagination from "../General/Pagination/Pagination";
import Table from "../General/Table/Table";
import Date from "../General/Date/Date";
import ButtonAddCustom from "../General/ButtonAddCustom/ButtonAddCustom";
import FileDown from "../General/FileDown/FileDown";
import FormNotModal from "../General/FormNotModal/FormNotModal";
import { useDispatch, useSelector } from "react-redux";
import * as categorysAction from "../../../../actions/category/index";
import Loading from "../../../Loading/Loading";

function Category(props) {
  //
  const { data } = props;
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    //
    dispatch(categorysAction.resetCategory());
    dispatch(categorysAction.loadListCategoryRequest(`${data.nameTable}s`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return category.list ? (
    <div
      className="w-full px-5 bg-gray-100 overflow-y-auto h-full scrollbar-css"
      id="contentRight"
      style={{ height: "calc(100% - 76px)", maxHeight: "calc(100% - 76px)" }}
    >
      <div className="w-full flex py-2 relative">
        <div className="mr-10 flex">
          <p className="text-2xl font-bold flex items-center">{data.label}</p>
        </div>
        <div className="w-auto flex items-center justify-end">
          {data.filterAndSorter && <Date />}
          <FileDown />
          {data.modal ? <ButtonAddCustom /> : ""}
        </div>
      </div>
      {data.filterAndSorter && <Control type={data.type} data={data} />}
      <div className="w-full  py-3">
        {data.modal ? (
          <>
            <Table
              type={data.type}
              title={data.table}
              list={category.list}
              category={category}
            />
            <Pagination
              type={data.type}
              category={category}
              table={data.nameTable}
            />
          </>
        ) : (
          <>
            <div className="w-full flex">
              <div className="w-2/5">
                <FormNotModal />
              </div>
              <div className="w-3/5">
                <div className="w-full flex justify-end">
                  <button
                    className="px-7 py-2.5 font-semibold text-white bg-organce mx-2 
                        rounded-full"
                  >
                    Thêm
                  </button>
                  <button
                    className="px-7 py-2.5 font-semibold text-white bg-organce mx-2 
                      rounded-full"
                  >
                    Sửa
                  </button>
                  <button
                    className="px-7 py-2.5 font-semibold text-white bg-organce mx-2 
                      rounded-full"
                  >
                    Xóa
                  </button>
                </div>
                <Table
                  type={data.type}
                  title={data.table}
                  list={category.list}
                  category={category}
                />
                <Pagination
                  type={data.type}
                  table={data.nameTable}
                  category={category}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Category;
