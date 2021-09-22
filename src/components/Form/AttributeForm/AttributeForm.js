import React, { useEffect, useState } from "react";
import InputField from "../../InputField/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button/Button";
import ValidForm from "./ValidForm";
import SelectCustom from "../../SelectCustom/SelectCustom";
import * as categorysAction from "../../../actions/category/index";
import { useDispatch } from "react-redux";
import * as productsApi from "../../../api/productsApi";

function AttributeForm(props) {
  //
  const { dataProps, table } = props;
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
  const dispatch = useDispatch();
  const [groupAttributes, setGroupAttributes] = useState([]);
  const onSubmit = async (data) => {
    dispatch(categorysAction.addCategoryRequest(data, table + "s"));
    setValue("id", "");
    setValue("groupAttribute", "");
    setValue("nameAttribute", "");
  };
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await productsApi.getGroupAttributesAll();
      if (unmounted) return;
      setGroupAttributes(result.data);
      setValue("id", dataProps ? dataProps.id : "");
      setValue("groupAttribute", dataProps ? dataProps.groupAttribute : "");
      setValue("nameAttribute", dataProps ? dataProps.nameAttribute : "");
    }
    fetch();
    return () => {
      unmounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataProps]);
  //
  return (
    <div className="w-10/12">
      <p className="text-2xl mb-5 font-semibold">Thêm bộ nhớ</p>
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
          disabled={true}
        />
        <SelectCustom
          list={groupAttributes}
          className={
            "w-full rounded-lg p-2.5 border-2 border-solid border-gray-300 mt-2 relative"
          }
          attribute={"nameGroupAttribute"}
          placeHolder={"Nhập nhóm thuộc tính"}
          label={"Nhóm thuộc tính"}
          table={"nhóm thuộc tính"}
          dataProps={dataProps}
          setData={(item) => {
            setValue("groupAttribute", item);
          }}
        />
        <InputField
          register={register}
          className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
          showError={errors["nameAttribute"]}
          placeHolder={"Nhập tên thuộc tính"}
          name={"nameAttribute"}
          label={"Tên thuộc tính"}
          type="text"
          onChange={() => ""}
          disabled={false}
        />
        <Button propsGet={dataProps} />
      </form>
    </div>
  );
}

export default AttributeForm;
