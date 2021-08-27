import React from "react";
import { useForm } from "react-hook-form";
import ScrollContainer from "react-indiana-drag-scroll";
import InputField from "../../../../InputField/InputField";

function PriceAndSale(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    // resolver: yupResolver(ValidForm),
    shouldUnregister: false,
  });
  const onSubmit = () => {};
  return (
    <div
      className="w-11/12 mx-auto overflow-y-auto scrollbar-css"
      style={{
        height: 530,
        maxHeight: 530,
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex">
          <div className="w-1/2 mr-3">
            <InputField
              register={register}
              className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
              showError={errors["id"]}
              placeHolder={""}
              name={"timeInput"}
              label={"Ngày nhập vào"}
              type="date"
              onChange={() => ""}
              disabled={false}
            />
          </div>
          <div className="w-1/2">
            <InputField
              register={register}
              className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
              showError={errors["id"]}
              placeHolder={""}
              name={"timeOutput"}
              label={"Ngày bán ra"}
              type="date"
              onChange={() => ""}
              disabled={false}
            />
          </div>
        </div>
        <div className="w-full flex my-1 font-semibold">
          <div className="w-1/2 p-1 mr-3">Màu sắc</div>
          <div className="w-1/2 p-1 ">Bộ nhớ</div>
        </div>
        <div className="w-full flex">
          <ScrollContainer className="w-1/2 mr-3 max-w-1/2 overflow-x-auto flex p-1 border-2 border-solid border-gray-200 shadow-lg">
            <div className="w-10 h-10 rounded-full bg-green-500 mr-1.5 flex-shrink-0 cursor-pointer"></div>
            <div className="w-10 h-10 rounded-full bg-red-500 mr-1.5 flex-shrink-0 cursor-pointer"></div>
            <div className="w-10 h-10 rounded-full bg-yellow-500 mr-1.5 flex-shrink-0 cursor-pointer"></div>
            <div className="w-10 h-10 rounded-full bg-pink-500 mr-1.5 flex-shrink-0 cursor-pointer"></div>
            <div className="w-10 h-10 rounded-full bg-gray-500 mr-1.5 flex-shrink-0 cursor-pointer"></div>
            <div className="w-10 h-10 rounded-full bg-gray-500 mr-1.5 flex-shrink-0 cursor-pointer"></div>
            <div className="w-10 h-10 rounded-full bg-green-500 mr-1.5 flex-shrink-0 cursor-pointer"></div>
            <div className="w-10 h-10 rounded-full bg-red-500 mr-1.5 flex-shrink-0 cursor-pointer"></div>
            <div className="w-10 h-10 rounded-full bg-yellow-500 mr-1.5 flex-shrink-0 cursor-pointer"></div>
            <div className="w-10 h-10 rounded-full bg-pink-500 mr-1.5 flex-shrink-0 cursor-pointer"></div>
            <div className="w-10 h-10 rounded-full bg-gray-500 mr-1.5 flex-shrink-0 cursor-pointer"></div>
            <div className="w-10 h-10 rounded-full bg-gray-500 mr-1.5 flex-shrink-0 cursor-pointer"></div>
          </ScrollContainer>
          <ScrollContainer className="w-1/2 max-w-1/2 overflow-x-auto flex p-1 border-2  border-solid border-gray-200 shadow-lg">
            <div
              className="px-2 h-10 rounded-lg font-semibold mr-1.5 flex-shrink-0 flex items-center 
            justify-center border-2 border-solid border-gray-200 cursor-pointer"
            >
              32GB
            </div>
            <div
              className="px-2 h-10 rounded-lg font-semibold mr-1.5 flex-shrink-0 flex items-center 
            justify-center border-2 border-solid border-gray-200 cursor-pointer"
            >
              32GB
            </div>
            <div
              className="px-2 h-10 rounded-lg font-semibold mr-1.5 flex-shrink-0 flex items-center 
            justify-center border-2 border-solid border-gray-200 cursor-pointer"
            >
              32GB
            </div>
            <div
              className="px-2 h-10 rounded-lg font-semibold mr-1.5 flex-shrink-0 flex items-center 
            justify-center border-2 border-solid border-gray-200 cursor-pointer"
            >
              32GB
            </div>
            <div
              className="px-2 h-10 rounded-lg font-semibold mr-1.5 flex-shrink-0 flex items-center 
            justify-center border-2 border-solid border-gray-200 cursor-pointer"
            >
              32GB
            </div>
            <div
              className="px-2 h-10 rounded-lg font-semibold mr-1.5 flex-shrink-0 flex items-center 
            justify-center border-2 border-solid border-gray-200 cursor-pointer"
            >
              32GB
            </div>
          </ScrollContainer>
        </div>
        <div className="w-full relative">
          <div className="w-full flex px-3">
            <div className="w-1/2 mr-3">
              <div className="font-semibold text-2xl my-3">
                Iphone 7 pro max
              </div>
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
      </form>
    </div>
  );
}

export default PriceAndSale;
