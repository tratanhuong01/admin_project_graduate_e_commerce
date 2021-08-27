import React from "react";
import InputField from "../../../../../InputField/InputField";

function ContentMainProduct(props) {
  //
  const { register, errors } = props;
  //
  return (
    <div className="w-full relative">
      <div className="w-full flex px-3">
        <div className="w-1/2 mr-3">
          <div className="font-semibold text-2xl my-3">Iphone 7 pro max</div>
          <input type="file" id="file" className="hidden" />
          <label htmlFor="file" className="w-11/12 h-72 mx-auto relative">
            <img
              src="https://bizweb.dktcdn.net/thumb/large/100/420/160/products/ipad-pro-2021-11-inch-silver.png?v=1626664287000"
              alt=""
              className="w-full object-contain h-72"
            />
          </label>
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
          <li className="px-2 py-1 border-2 border-solid border-gray-300 h-9 rounded-full mr-1 flex justity-center items-center font-semibold cursor-pointer">
            Prev
          </li>
          <li className="px-2 py-1 border-2 border-solid border-gray-300 h-9 rounded-full mr-1 flex justity-center items-center font-semibold cursor-pointer">
            1/25
          </li>
          <li className="px-2 py-1 border-2 border-solid border-gray-300  h-9 rounded-full mr-1 flex justity-center items-center font-semibold cursor-pointer ">
            Next
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContentMainProduct;
