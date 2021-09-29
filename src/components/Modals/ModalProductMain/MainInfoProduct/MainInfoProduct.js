import React from "react";
import { useForm } from "react-hook-form";
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
      className="w-full mx-auto overflow-y-auto scrollbar-css"
      style={{
        height: 530,
        maxHeight: 530,
      }}
    >
      <ColorMemoryRam />
      <ContentMainProduct
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default MainInfoProduct;
