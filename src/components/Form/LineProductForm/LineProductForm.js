import React, { useEffect, useState } from "react";
import InputField from "../../InputField/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button/Button";
import ValidForm from "./ValidForm";
import SelectCustom from "../../SelectCustom/SelectCustom";
import api from "../../../Utils/api";
function LineProductForm(props) {
  //
  const { dataProps } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(ValidForm),
    shouldUnregister: false,
  });
  const onSubmit = () => {};
  const [list, setList] = useState([]);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await api("groupProductsAll", "GET", null);
      if (unmounted) return;
      setList(result.data);
      setValue("id", dataProps ? dataProps.id : "");
      setValue("nameLineProduct", dataProps ? dataProps.nameGroupProduct : "");
      setValue("groupProduct", dataProps ? dataProps.groupProduct : null);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataProps]);
  //
  return (
    <div className="w-10/12">
      <p className="text-2xl mb-5 font-semibold">Thêm dòng sản phẩm</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          register={register}
          className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
          showError={errors["id"]}
          placeHolder={"Nhập id"}
          name={"id"}
          label={"ID"}
          type="text"
          onChange={() => ""}
          disabled={false}
        />
        <InputField
          register={register}
          className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
          showError={errors["nameLineProduct"]}
          placeHolder={"Nhập tên sản phẩm"}
          name={"nameLineProduct"}
          label={"Tên sản phẩm"}
          onChange={() => ""}
          type="text"
          disabled={false}
        />
        <SelectCustom
          list={list}
          className={
            "w-full rounded-lg p-2.5 border-2 border-solid border-gray-300 mt-2 relative"
          }
          attribute={"nameGroupProduct"}
          placeHolder={"Nhập nội dung"}
          label={"Nhóm sản phẩm"}
          table={"nhóm sản phẩm"}
          setData={() => ""}
        />
        <Button propsGet={dataProps} />
      </form>
    </div>
  );
}

export default LineProductForm;
