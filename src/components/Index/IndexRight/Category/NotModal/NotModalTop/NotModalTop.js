import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as formsAction from "../../../../../../actions/form/index";
import * as categorysAction from "../../../../../../actions/category/index";

function NotModalTop(props) {
  //
  const { table } = props;
  const category = useSelector((state) => state.category);
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {}, [category.choose]);
  //
  return (
    <div className="w-full flex justify-end">
      <input
        className="w-1/2 mr-4 p-2.5 rounded-3xl 
        bg-white border-solid border-gray-200 border-2"
        placeholder="Nhập ID hoặc tên danh mục"
        spellCheck={false}
        onChange={(event) => {
          setKeyword(event.target.value);
          if (event.target.value.length <= 0)
            dispatch(categorysAction.loadListCategoryRequest(table + "s"));
          else {
            dispatch(
              categorysAction.searchCategoryRequest({
                keyword,
                table: table + "s",
              })
            );
          }
        }}
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
            categorysAction.deleteCategoryRequest(category.choose, table + "s")
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
