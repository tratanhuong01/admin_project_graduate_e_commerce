import React from "react";
import { useForm } from "react-hook-form";
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
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex">
          <div className="w-1/2 mr-3">
            <InputField
              register={register}
              className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
              showError={errors["id"]}
              placeHolder={"Nhập giá nhâp vào"}
              name={"priceInput"}
              label={"Giá nhập vào"}
              type="text"
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
              name={"timeInput"}
              label={"Ngày nhập vào"}
              type="date"
              onChange={() => ""}
              disabled={false}
            />
          </div>
        </div>
        <div className="w-full flex">
          <div className="w-1/2 mr-3">
            <InputField
              register={register}
              className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
              showError={errors["id"]}
              placeHolder={"Nhập giá bán ra"}
              name={"priceOutput"}
              label={"Giá bán ra"}
              type="text"
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
      </form>
    </div>
  );
}

export default PriceAndSale;
