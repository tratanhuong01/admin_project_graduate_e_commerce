import React, { useEffect } from "react";
import InputField from "../../InputField/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button/Button";
import ValidForm from "./ValidForm";
import * as categorysAction from "../../../actions/category/index";
import { useDispatch } from "react-redux";
function CategoryProductForm(props) {
  //
  const { dataProps } = props;
  const dispatch = useDispatch();
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

  const onSubmit = async (data) => {
    dispatch(categorysAction.addCategoryRequest(data, "categoryProducts"));
    setValue("id", "");
    setValue("nameCategoryProduct", "");
    setValue("slugCategoryProduct", "");
    setValue("icon", "");
  };
  useEffect(() => {
    //
    setValue("id", dataProps ? dataProps.id : "");
    setValue(
      "nameCategoryProduct",
      dataProps ? dataProps.nameCategoryProduct : ""
    );
    setValue(
      "slugCategoryProduct",
      dataProps ? dataProps.slugCategoryProduct : ""
    );
    setValue("icon", dataProps ? dataProps.icon : "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataProps]);
  //
  return (
    <div className="w-10/12">
      <p className="text-2xl mb-5 font-semibold">Thêm danh mục sản phẩm</p>
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
          showError={errors["nameCategoryProduct"]}
          placeHolder={"Nhập tên danh mục sản phẩm"}
          name={"nameCategoryProduct"}
          label={"Tên danh mục sản phẩm"}
          onChange={() => ""}
          type="text"
          disabled={false}
        />
        <InputField
          register={register}
          className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
          showError={errors["slugCategoryProduct"]}
          placeHolder={"Nhập đường dẫn danh mục sản phẩm"}
          name={"slugCategoryProduct"}
          label={"Đường dẫn danh mục sản phẩm"}
          onChange={() => ""}
          type="text"
          disabled={false}
        />
        <InputField
          register={register}
          className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
          showError={errors["icon"]}
          placeHolder={"Nhập icon danh mục sản phẩm"}
          name={"icon"}
          label={"Icon danh mục sản phẩm"}
          onChange={() => ""}
          type="text"
          disabled={false}
        />
        <Button propsGet={dataProps} />
      </form>
    </div>
  );
}

export default CategoryProductForm;
