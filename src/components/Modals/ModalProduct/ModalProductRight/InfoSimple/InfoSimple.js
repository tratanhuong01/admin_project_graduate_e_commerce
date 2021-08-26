import React from "react";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import SelectCustom from "../../../../SelectCustom/SelectCustom";
function InfoSimple(props) {
  const {
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
        <SelectCustom
          list={[]}
          className={
            "w-full rounded-lg p-2.5 border-2 border-solid border-gray-300 mt-2 relative"
          }
          attribute={"nameGroupProduct"}
          placeHolder={"Nhập nội dung"}
          label={"Danh mục sản phẩm"}
          table={"danh mục sản phẩm"}
          setData={() => ""}
        />
        <SelectCustom
          list={[]}
          className={
            "w-full rounded-lg p-2.5 border-2 border-solid border-gray-300 mt-2 relative"
          }
          attribute={"nameGroupProduct"}
          placeHolder={"Nhập nội dung"}
          label={"Nhóm sản phẩm"}
          table={"nhóm sản phẩm"}
          setData={() => ""}
        />
        <SelectCustom
          list={[]}
          className={
            "w-full rounded-lg p-2.5 border-2 border-solid border-gray-300 mt-2 relative"
          }
          attribute={"nameGroupProduct"}
          placeHolder={"Nhập nội dung"}
          label={"Dòng sản phẩm"}
          table={"dòng sản phẩm"}
          setData={() => ""}
        />
        <SelectCustom
          list={[]}
          className={
            "w-full rounded-lg p-2.5 border-2 border-solid border-gray-300 mt-2 relative"
          }
          attribute={"nameGroupProduct"}
          placeHolder={"Nhập nội dung"}
          label={"Thương hiệu sản phẩm"}
          table={"thương hiệu sản phẩm"}
          setData={() => ""}
        />
        <SelectCustom
          list={[]}
          className={
            "w-full rounded-lg p-2.5 border-2 border-solid border-gray-300 mt-2 relative"
          }
          attribute={"status"}
          placeHolder={"Nhập nội dung"}
          label={"Tình trạng"}
          table={"tình trạng"}
          setData={() => ""}
        />
      </form>
    </div>
  );
}

export default InfoSimple;
