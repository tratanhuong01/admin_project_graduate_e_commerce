import React from "react";
import { useForm } from "react-hook-form";
import ColorMemoryRamEdit from "./ColorMemoryRamEdit/ColorMemoryRamEdit";
import ContentMainProductEdit from "./ContentMainProductEdit/ContentMainProductEdit";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function MainInfoProductEdit(props) {
  const schema = Yup.object().shape({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    shouldUnregister: false,
  });
  const onSubmit = () => {};
  return (
    <div
      className="w-full pt-16 px-3"
      style={{ height: "550px", maxHeight: "550px" }}
    >
      <ColorMemoryRamEdit />
      <ContentMainProductEdit
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        setValue={setValue}
      />
    </div>
  );
}

export default MainInfoProductEdit;
