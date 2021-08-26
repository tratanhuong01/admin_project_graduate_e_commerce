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
