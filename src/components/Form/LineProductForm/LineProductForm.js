import React, { useEffect, useState } from "react";
import InputField from "../../InputField/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button/Button";
import ValidForm from "./ValidForm";
import SelectCustom from "../../SelectCustom/SelectCustom";
import * as categorysAction from "../../../actions/category/index";
import * as productsApi from "../../../api/productsApi";
import { useDispatch } from "react-redux";
function LineProductForm(props) {
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
  const [list, setList] = useState([]);
  const onSubmit = (data) => {
    dispatch(categorysAction.addCategoryRequest(data, table + "s"));
    setList([]);
    setValue("id", "");
    setValue("nameLineProduct", "");
    setValue("groupProduct", null);
  };
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await productsApi.getGroupProductsAll();
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
        <SelectCustom
          list={list}
          className={
            "w-full rounded-lg p-2.5 border-2 border-solid border-gray-300 mt-2 relative"
          }
          attribute={"nameGroupProduct"}
          placeHolder={"Nhập nội dung"}
          label={"Nhóm sản phẩm"}
          table={"nhóm sản phẩm"}
          setData={(item) => setValue("groupProduct", item)}
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
        <Button propsGet={dataProps} />
      </form>
    </div>
  );
}

export default LineProductForm;
