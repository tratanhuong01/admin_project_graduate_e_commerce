import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../../../InputField/InputField";
import * as productsAction from "../../../../../actions/products/index";
import DateInfoSimple from "../../../ModalProduct/ModalProductRight/InfoSimple/DateInfoSimple/DateInfoSimple";

function ContentMainProduct(props) {
  //
  const { register, errors, handleSubmit, onSubmit } = props;
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {}, [products.infoMain.index]);
  //
  return (
    products.infoMain.lists.length > 0 && (
      <form onSubmit={handleSubmit(onSubmit)} className="w-full relative">
        <div className="w-full flex px-3">
          <div className="w-1/2">
            {products.infoMain.lists[products.infoMain.index - 1].id !== -1 && (
              <>
                <div className="font-semibold text-xm my-3">
                  {
                    products.infoMain.lists[products.infoMain.index - 1]
                      .nameProduct
                  }
                </div>
                <img
                  src={
                    products.infoMain.lists[products.infoMain.index - 1].color
                      .id &&
                    products.infoMain.images[
                      products.infoMain.lists[products.infoMain.index - 1].color
                        .id
                    ] &&
                    products.infoMain.images[
                      products.infoMain.lists[products.infoMain.index - 1].color
                        .id
                    ].src
                  }
                  alt=""
                  className="w-3/4 object-contain h-72 mx-auto"
                />
              </>
            )}
          </div>
          <div className="w-1/2">
            <div className="w-full flex">
              <div className="w-1/2 pr-5">
                <InputField
                  register={register}
                  className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
                  showError={errors["id"]}
                  placeHolder={"Nhập giá nhập vào"}
                  name={"priceInput"}
                  label={"Giá nhập vào"}
                  type="text"
                  onChange={(value) =>
                    dispatch(
                      productsAction.loadInfoMainPriceAmountSale(value, 0)
                    )
                  }
                  disabled={false}
                />
              </div>
              <div className="w-1/2">
                <InputField
                  register={register}
                  className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
                  showError={errors["id"]}
                  placeHolder={"Nhập giá bán ra"}
                  name={"priceOutput"}
                  label={"Giá nhập ra"}
                  type="text"
                  onChange={(value) =>
                    dispatch(
                      productsAction.loadInfoMainPriceAmountSale(value, 1)
                    )
                  }
                  disabled={false}
                />
              </div>
            </div>
            <div className="w-full flex">
              <div className="w-1/2 pr-5">
                <InputField
                  register={register}
                  className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
                  showError={errors["amountInput"]}
                  placeHolder={"Số lượng bán ra"}
                  name={"amountInput"}
                  label={"Số lượng nhập vào"}
                  type="number"
                  onChange={(value) =>
                    dispatch(
                      productsAction.loadInfoMainPriceAmountSale(value, 2)
                    )
                  }
                  disabled={false}
                />
              </div>
              <div className="w-1/2 ">
                <InputField
                  register={register}
                  className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
                  showError={errors["amountOutput"]}
                  placeHolder={"Số lượng bán ra"}
                  name={"amountOutput"}
                  label={"Số lượng bán ra"}
                  type="number"
                  onChange={(value) =>
                    dispatch(
                      productsAction.loadInfoMainPriceAmountSale(value, 4)
                    )
                  }
                  disabled={false}
                />
              </div>
            </div>
            <DateInfoSimple register={register} errors={errors} />
            <div className="w-full flex">
              <div className="w-1/2 pr-5">
                <InputField
                  register={register}
                  className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
                  showError={errors["sale"]}
                  placeHolder={"Nhập khuyến mãi"}
                  name={"sale"}
                  label={"Khuyến mãi"}
                  type="number"
                  onChange={(value) =>
                    dispatch(
                      productsAction.loadInfoMainPriceAmountSale(value, 3)
                    )
                  }
                  disabled={false}
                />
              </div>
              <div className="w-1/2">
                <InputField
                  register={register}
                  className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
                  showError={errors["saleDefault"]}
                  placeHolder={"Nhập khuyến mãi mặc định"}
                  name={"saleDefault"}
                  label={"Khuyến mãi mặc định"}
                  type="number"
                  onChange={(value) =>
                    dispatch(
                      productsAction.loadInfoMainPriceAmountSale(value, 5)
                    )
                  }
                  disabled={false}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <ul className="flex items-center my-2">
            <li
              onClick={() => {
                if (products.infoMain.index <= 1) return;
                dispatch(
                  productsAction.loadInfoMainProductByIndex(
                    products.infoMain.index - 1
                  )
                );
              }}
              className={`px-2 py-1 border-2 border-solid border-gray-300 h-9 rounded-full mr-1 flex justity-center items-center font-semibold  ${
                products.infoMain.index === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer"
              }`}
            >
              Prev
            </li>
            <li className="px-2 py-1 border-2 border-solid border-gray-300 h-9 rounded-full mr-1 flex justity-center items-center font-semibold cursor-pointer">
              {products.infoMain.index}/ {products.infoMain.lists.length}
            </li>
            <li
              onClick={() => {
                if (products.infoMain.index === products.infoMain.lists.length)
                  return;
                dispatch(
                  productsAction.loadInfoMainProductByIndex(
                    products.infoMain.index + 1
                  )
                );
              }}
              className={`px-2 py-1 border-2 border-solid border-gray-300 h-9 rounded-full mr-1 flex justity-center items-center font-semibold  ${
                products.infoMain.index === products.infoMain.lists.length
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer"
              }`}
            >
              Next
            </li>
          </ul>
        </div>
        <div className="my-2 flex justify-end pr-4">
          <button className="px-4 py-3 bg-gray-500 mr-4 rounded-lg text-white font-semibold">
            Hủy
          </button>
          <button
            type="submit"
            className="px-4 py-3 bg-organce rounded-lg text-white font-semibold"
          >
            Thêm sản phẩm
          </button>
        </div>
      </form>
    )
  );
}

export default ContentMainProduct;
