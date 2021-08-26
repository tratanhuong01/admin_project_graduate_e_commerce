import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as formsAction from "../../../../../../actions/form/index";
function NotModalTop(props) {
  //
  const { category, table } = props;
  const dispatch = useDispatch();
  useEffect(() => {}, [category.choose]);
  //
  return (
    <div className="w-full flex justify-end">
      <input
        className="w-1/2 mr-4 p-2.5 rounded-3xl 
        bg-white border-solid border-gray-200 border-2"
        placeholder="Tìm kiếm"
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
        className="px-7 py-2.5 font-semibold text-white bg-organce mx-2 
                rounded-full"
      >
        Xóa
      </button>
    </div>
  );
}

export default NotModalTop;
