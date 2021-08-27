import React from "react";
import { useForm } from "react-hook-form";
import ScrollContainer from "react-indiana-drag-scroll";
import InputField from "../../../../InputField/InputField";
import ColorMemoryRam from "./ColorMemoryRam/ColorMemoryRam";
import ContentMainProduct from "./ContentMainProduct/ContentMainProduct";

function MainInfoProduct(props) {
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
        <ColorMemoryRam />
        <ContentMainProduct register={() => ""} errors={errors} />
      </form>
    </div>
  );
}

export default MainInfoProduct;
