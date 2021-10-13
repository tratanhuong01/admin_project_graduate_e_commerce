import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as formsAction from "../../../../../../actions/form/index";
import * as categorysAction from "../../../../../../actions/category/index";
import { LOADING_CATEGORY } from "../../../../../../constants/ActionTypes";

function NotModalTop(props) {
  //
  const { table } = props;
  const { category, headers } = useSelector((state) => {
    return {
      category: state.category,
      headers: state.headers,
    };
  });
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    //
    let timeOut;
    dispatch({ type: LOADING_CATEGORY, loading: true });
    timeOut = setTimeout(async () => {
      if (keyword.length <= 0)
        dispatch(
          categorysAction.loadListCategoryRequest(
            table + "s",
            null,
            false,
            headers
          )
        );
      else {
        dispatch(
          categorysAction.searchCategoryRequest(
            {
              keyword,
              table: table + "s",
            },
            headers
          )
        );
      }
    }, 300);
    return () => {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword, category.choose]);
  //
  return (
    <div className="w-full flex justify-end">
      <input
        className="w-1/2 mr-4 p-2.5 rounded-3xl 
        bg-white border-solid border-gray-200 border-2"
        placeholder="Nhập ID hoặc tên danh mục"
        spellCheck={false}
        onChange={(event) => setKeyword(event.target.value)}
        value={keyword}
      />
      <button
        onClick={() => dispatch(formsAction.openFormAdd(table))}
        className="px-7 py-2.5 font-semibold text-white bg-organce mx-2 
                  rounded-full"
      >
        Thêm
      </button>
      {category.choose.length === 1 && (
        <button
          onClick={() =>
            dispatch(formsAction.openFormEdit(table, category.choose[0]))
          }
          className="px-7 py-2.5 font-semibold text-white bg-organce mx-2 
          rounded-full"
        >
          Sửa
        </button>
      )}
      <button
        onClick={() =>
          dispatch(
            categorysAction.deleteCategoryRequest(
              category.choose,
              table + "s",
              null,
              headers
            )
          )
        }
        className="px-7 py-2.5 font-semibold text-white bg-organce mx-2 
                rounded-full"
      >
        Xóa
      </button>
    </div>
  );
}

export default NotModalTop;
