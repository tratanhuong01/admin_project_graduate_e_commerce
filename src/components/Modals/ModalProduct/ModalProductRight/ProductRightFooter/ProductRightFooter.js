import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as modalsAction from "../../../../../actions/modals/index";
function ProductRightFooter(props) {
  //
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  //
  return (
    <div className="w-11/12 mx-auto bg-white text-right pt-1 pb-3 border-t-2 border-solid border-gray-300 mt-4 z-50">
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
        {products.index === 4 ? "Lưu sản phẩm" : "Tiếp tục"}
      </button>
    </div>
  );
}

export default ProductRightFooter;
