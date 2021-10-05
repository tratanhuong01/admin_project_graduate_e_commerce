import React, { useEffect } from "react";
import Control from "../General/Control/Control";
import Date from "../General/Date/Date";
import ButtonCustom from "../General/ButtonCustom/ButtonCustom";
import FileDown from "../General/FileDown/FileDown";
import { useDispatch, useSelector } from "react-redux";
import * as categorysAction from "../../../../actions/category/index";
import Loading from "../../../Loading/Loading";
import * as formsAction from "../../../../actions/form/index";
import HaveModal from "./HaveModal/HaveModal";
import NotModal from "./NotModal/NotModal";
function Category(props) {
  //
  const { data } = props;
  const { category, form, headers } = useSelector((state) => {
    return {
      category: state.category,
      form: state.form,
      headers: state.headers,
    };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    //
    dispatch(
      categorysAction.loadListCategoryRequest(`${data.nameTable}s`, headers)
    );
    if (!data.modal) dispatch(formsAction.openFormAdd(data.nameTable));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return category.list ? (
    <div
      className="w-full px-5 overflow-y-auto h-full scrollbar-css"
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
          {data.modal ? <ButtonCustom table={data.nameTable} /> : ""}
        </div>
      </div>
      {data.filterAndSorter && <Control type={data.type} data={data} />}
      <div className="w-full  py-3">
        {data.modal ? (
          <HaveModal data={data} category={category} />
        ) : (
          <NotModal category={category} data={data} form={form} />
        )}
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Category;
