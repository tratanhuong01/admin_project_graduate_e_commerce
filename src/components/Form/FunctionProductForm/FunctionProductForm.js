import React, { useEffect, useState } from "react";
import InputField from "../../InputField/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button/Button";
import ValidForm from "./ValidForm";
import api from "../../../Utils/api";
import SelectCustom from "../../SelectCustom/SelectCustom";
function FunctionProductForm(props) {
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
  const onSubmit = async (data) => {
    await api("functionProducts", "POST", data);
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
      const result = await api("groupFilterProductsAll", "GET", null);
      if (unmounted) return;
      setGroupFilterProduct(result.data);
    }
    fetch();
    return () => {
      unmounted = true;
    };
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
          disabled={false}
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
