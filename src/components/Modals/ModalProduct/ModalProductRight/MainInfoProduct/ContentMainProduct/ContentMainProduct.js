import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../../../../InputField/InputField";
import * as productsAction from "../../../../../../actions/products/index";
function ContentMainProduct(props) {
  //
  const { register, errors } = props;
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {}, [products.infoMain.index]);
  //
  return (
    products.infoMain.lists.length > 0 && (
      <div className="w-full relative">
        <div className="w-full flex px-3">
          <div className="w-1/2 mr-3">
            <div className="font-semibold text-xm my-3">
              {products.infoMain.lists[products.infoMain.index - 1].nameProduct}
            </div>
            {products.infoMain.lists[products.infoMain.index - 1].imageDemo ? (
              <>
                <input
                  type="file"
                  id="file"
                  className="hidden"
                  onChange={(event) => {
                    dispatch(
                      productsAction.loadInfoImageMainProduct(
                        event.target.files[0],
                        products.infoMain.lists[products.infoMain.index - 1]
                      )
                    );
                  }}
                />
                <label htmlFor="file" className="w-11/12 h-72 mx-auto relative">
                  <img
                    src={URL.createObjectURL(
                      products.infoMain.lists[products.infoMain.index - 1]
                        .imageDemo
                    )}
                    alt=""
                    className="w-full object-contain h-72"
                  />
                </label>
              </>
            ) : (
              <>
                <input
                  type="file"
                  id="file"
                  onChange={(event) => {
                    dispatch(
                      productsAction.loadInfoImageMainProduct(
                        event.target.files[0],
                        products.infoMain.lists[products.infoMain.index - 1]
                      )
                    );
                  }}
                  className="hidden"
                />
                <label
                  htmlFor="file"
                  className="w-11/12 h-72 mx-auto relative flex items-center justify-center"
                >
                  <i className="bx bx-image-alt text-7xl text-gray-600" />
                </label>
              </>
            )}
          </div>
          <div className="w-1/2">
            <InputField
              register={register}
              className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
              showError={errors["id"]}
              placeHolder={"Nhập giá nhập vào"}
              name={"priceInput"}
              label={"Giá nhập vào"}
              type="text"
              onChange={() => ""}
              disabled={false}
            />
            <InputField
              register={register}
              className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
              showError={errors["id"]}
              placeHolder={"Nhập giá bán ra"}
              name={"priceOutput"}
              label={"Giá nhập ra"}
              type="text"
              onChange={() => ""}
              disabled={false}
            />
            <InputField
              register={register}
              className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
              showError={errors["id"]}
              placeHolder={"Số lượng"}
              name={"amount"}
              label={"Số lượng"}
              type="number"
              onChange={() => ""}
              disabled={false}
            />
            <InputField
              register={register}
              className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
              showError={errors["id"]}
              placeHolder={"Nhập khuyến mãi"}
              name={"sale"}
              label={"Khuyến mãi"}
              type="number"
              onChange={() => ""}
              disabled={false}
            />
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
      </div>
    )
  );
}

export default ContentMainProduct;
