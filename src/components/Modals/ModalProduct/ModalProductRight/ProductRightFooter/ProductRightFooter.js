import React from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../../../../actions/modals/index";
function ProductRightFooter(props) {
  //
  const dispatch = useDispatch();
  //
  return (
    <div className="w-full text-right pt-1 pb-3 border-t-2 border-solid border-gray-300 absolute bottom-0 right-0">
      <button
        onClick={() => dispatch(modalsAction.closeModal())}
        type="button"
        className=" py-2.5 px-5 mr-4 rounded-lg bg-gray-500 font-semibold text-xm text-white"
      >
        {"Hủy"}
      </button>
      <button
        type="submit"
        className=" py-2.5 px-5 rounded-lg bg-organce font-semibold text-xm text-white"
      >
        {"Tiếp tục"}
      </button>
    </div>
  );
}

export default ProductRightFooter;
