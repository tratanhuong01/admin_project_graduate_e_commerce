import React from "react";
import { useForm } from "react-hook-form";
import ColorMemoryRam from "./ColorMemoryRam/ColorMemoryRam";
import ContentMainProduct from "./ContentMainProduct/ContentMainProduct";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";

function MainInfoProduct(props) {
  const schema = Yup.object().shape({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    shouldUnregister: false,
  });
  const products = useSelector((state) => state.products);
  const onSubmit = () => {
    console.log(products);
  };
  return (
    <div
      className="w-full mx-auto overflow-y-auto scrollbar-css pt-16 px-3"
      style={{
        height: 600,
        maxHeight: 600,
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
