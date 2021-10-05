import React, { useEffect } from "react";
import InputField from "../../InputField/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button/Button";
import ValidForm from "./ValidForm";
import { useDispatch, useSelector } from "react-redux";
import * as categorysAction from "../../../actions/category/index";
function BrandForm(props) {
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
  const headers = useSelector((state) => state.headers);
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(
      categorysAction.addCategoryRequest(
        data,
        table + "s",
        null,
        false,
        null,
        headers
      )
    );
    setValue("id", "");
    setValue("nameBrand", "");
    setValue("imageBrand", "");
  };
  useEffect(() => {
    //
    setValue("id", dataProps ? dataProps.id : "");
    setValue("nameBrand", dataProps ? dataProps.nameBrand : "");
    setValue("imageBrand", dataProps ? dataProps.imageBrand : "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataProps]);
  //
  return (
    <div className="w-10/12">
      <p className="text-2xl mb-5 font-semibold">Thêm thương hiệu</p>
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
          showError={errors["nameBrand"]}
          placeHolder={"Nhập tên thuong hiệu"}
          name={"nameBrand"}
          label={"Thương hiệu"}
          onChange={() => ""}
          type="text"
          disabled={false}
        />
        <InputField
          register={register}
          className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
          showError={errors["imageBrand"]}
          placeHolder={"Nhập đường dẫn thuong hiệu"}
          name={"imageBrand"}
          label={"Hình ảnh thương hiệu"}
          onChange={() => ""}
          type="text"
          disabled={false}
        />
        <Button propsGet={dataProps} />
      </form>
    </div>
  );
}

export default BrandForm;
