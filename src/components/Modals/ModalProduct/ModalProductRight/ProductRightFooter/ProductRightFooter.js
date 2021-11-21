import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as modalsAction from "../../../../../actions/modals/index";
import * as productsAction from "../../../../../actions/products/index";
import * as add from "./add";
import * as edit from "./edit";
import * as categorysAction from "../../../../../actions/category/index";

function ProductRightFooter(props) {
  //
  const dispatch = useDispatch();
  const { products, headers, category, filters } = useSelector((state) => {
    return {
      products: state.products,
      headers: state.headers,
      category: state.category,
      filters: state.filters
    };
  });
  const loadData = () => {
    dispatch(categorysAction.loadListCategoryConnectRequest('lineProductFilters', {
      full: `?lineProductType=0`,
      limit: `?lineProductType=0&limit=${10}&offset=${category.index}`,
    }, true, {
      filters: filters.choose,
      sorter: filters.sorter,
      search: filters.search,
      mainFilters: filters
    },
      headers))
  }
  //
  return (
    <div
      className="mx-auto bg-white text-right pt-1 pb-3 border-t-2 border-solid border-gray-300 mt-4 z-50"
      style={{ width: "98%" }}
    >
      <button
        onClick={() => {
          dispatch(modalsAction.closeModal());
          dispatch(productsAction.resetDataProductState());
        }}
        type="button"
        className="mt-3 py-2.5 px-5 mr-4 rounded-lg bg-gray-500 font-semibold text-xm text-white"
      >
        {"Hủy"}
      </button>
      <button
        onClick={async () => {
          if (products.index === 5) {
            if (!products.listData) await add.addProduct(products, headers, dispatch);
            else await edit.updateProduct(products, headers, dispatch);
            loadData();
          }
          else
            dispatch(
              productsAction.loadCategoryProductByIndex(products.index + 1)
            );

        }}
        type={"button"}
        className=" py-2.5 px-5 rounded-lg bg-organce font-semibold text-xm text-white"
      >
        {products.index === 5 ? "Lưu sản phẩm" : "Tiếp tục"}
      </button>
    </div>
  );
}

export default ProductRightFooter;
