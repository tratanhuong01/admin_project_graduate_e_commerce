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
                  placeHolder={"Nh???p gi?? nh???p v??o"}
                  name={"priceInput"}
                  label={"Gi?? nh???p v??o"}
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
                  placeHolder={"Nh???p gi?? b??n ra"}
                  name={"priceOutput"}
                  label={"Gi?? nh???p ra"}
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
                  placeHolder={"S??? l?????ng b??n ra"}
                  name={"amountInput"}
                  label={"S??? l?????ng nh???p v??o"}
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
                  placeHolder={"S??? l?????ng b??n ra"}
                  name={"amountOutput"}
                  label={"S??? l?????ng b??n ra"}
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
                  placeHolder={"Nh???p khuy???n m??i"}
                  name={"sale"}
                  label={"Khuy???n m??i"}
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
                  placeHolder={"Nh???p khuy???n m??i m???c ?????nh"}
                  name={"saleDefault"}
                  label={"Khuy???n m??i m???c ?????nh"}
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
            H???y
          </button>
          <button
            type="submit"
            className="px-4 py-3 bg-organce rounded-lg text-white font-semibold"
          >
            Th??m s???n ph???m
          </button>
        </div>
      </form>
    )
  );
}

export default ContentMainProduct;
