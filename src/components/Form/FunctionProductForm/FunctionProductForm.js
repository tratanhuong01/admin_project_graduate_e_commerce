import React, { useEffect, useState } from "react";
import InputField from "../../InputField/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button/Button";
import ValidForm from "./ValidForm";
import * as categorysAction from "../../../actions/category/index";
import SelectCustom from "../../SelectCustom/SelectCustom";
import { useDispatch, useSelector } from "react-redux";
import * as productsApi from "../../../api/productsApi";
function FunctionProductForm(props) {
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
  const headers = useSelector((state) => state.headers);
  const onSubmit = async (data) => {
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
    setValue("nameFunctionProduct", "");
    setValue("typeFunctionProduct", "");
  };
  const [groupFilterProduct, setGroupFilterProduct] = useState([]);
  useEffect(() => {
    //
    setValue("id", dataProps ? dataProps.id : "");
    setValue(
      "nameFunctionProduct",
      dataProps ? dataProps.nameFunctionProduct : ""
    );
    setValue(
      "typeFunctionProduct",
      dataProps ? dataProps.typeFunctionProduct : ""
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataProps]);
  useEffect(() => {
    let unmounted = false;
    async function fetch() {
      const result = await productsApi.getGroupFilterProductsAll(headers);
      if (unmounted) return;
      setGroupFilterProduct(result.data);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <div className="w-10/12">
      <p className="text-2xl mb-5 font-semibold">Thêm chức năng sản phẩm</p>
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
          list={groupFilterProduct}
          className={
            "w-full rounded-lg p-2.5 border-2 border-solid border-gray-300 mt-2 relative"
          }
          attribute={"nameGroupFilterProduct"}
          placeHolder={"Nhập bộ lọc sản phẩm"}
          label={"Nhóm bộ lọc sản phẩm"}
          table={"bộ lọc sản phẩm"}
          setData={(item) => setValue("groupFilterFunctionProduct", item)}
          concat={{ data1: "groupProductFilter", data2: "nameGroupProduct" }}
        />
        <InputField
          register={register}
          className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
          showError={errors["nameFunctionProduct"]}
          placeHolder={"Nhập tên chức năng sản phẩm"}
          name={"nameFunctionProduct"}
          label={"Tên chức năng sản phẩm"}
          onChange={() => ""}
          type="text"
          disabled={false}
        />
        <InputField
          register={register}
          className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
          showError={errors["typeFunctionProduct"]}
          placeHolder={"Nhập loại chức năng sản phẩm"}
          name={"typeFunctionProduct"}
          label={"Loại chức năng sản phẩm"}
          onChange={() => ""}
          type="number"
          disabled={false}
        />
        <Button propsGet={dataProps} />
      </form>
    </div>
  );
}
export default FunctionProductForm;
