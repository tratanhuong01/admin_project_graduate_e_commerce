import React from "react";
import { useForm } from "react-hook-form";
import ColorMemoryRam from "./ColorMemoryRam/ColorMemoryRam";
import ContentMainProduct from "./ContentMainProduct/ContentMainProduct";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function MainInfoProduct(props) {
  const schema = Yup.object().shape({
    id: Yup.string(),
    nameRam: Yup.string().required("Tên bộ nhớ không được trống !!"),
    type: Yup.number().integer().default(0),
    timeCreated: Yup.date(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
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
