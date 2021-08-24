import React from "react";
import Control from "../General/Control/Control";
import Pagination from "../General/Pagination/Pagination";
import Table from "../General/Table/Table";
import loading from "../../../../config/loading";
import Date from "../General/Date/Date";
import ButtonAddCustom from "../General/ButtonAddCustom/ButtonAddCustom";
import FileDown from "../General/FileDown/FileDown";
import FormNotModal from "../General/FormNotModal/FormNotModal";

function Category(props) {
  //
  const { data } = props;
  //
  return (
    <div
      className="w-full p-5 bg-gray-100 overflow-y-auto h-full scrollbar-css"
      style={{ height: "calc(100% - 76px)", maxHeight: "calc(100% - 76px)" }}
    >
      <div className="w-full flex py-2 relative">
        <div className="mr-10 flex">
          <p className="text-2xl font-bold flex items-center">{data.label}</p>
        </div>
        <div className="w-auto flex items-center justify-end">
          {loading[data.type].filterAndSorter && <Date />}
          <FileDown />
          {loading[data.type].modal ? <ButtonAddCustom /> : ""}
        </div>
      </div>
      {loading[data.type].filterAndSorter && (
        <Control type={data.type} data={loading[data.type]} />
      )}
      <div className="w-full  py-3">
        {loading[data.type].modal ? (
          <>
            <Table type={data.type} title={loading[data.type].table} />
            <Pagination type={data.type} />
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
                <Table type={data.type} title={loading[data.type].table} />
                <Pagination type={data.type} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Category;
