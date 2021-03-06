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
        Object.assign(data, { timeCreated: (dataProps ? dataProps.timeCreated : null) }),
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
      <p className="text-2xl mb-5 font-semibold">Th??m ch???c n??ng s???n ph???m</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          register={register}
          className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
          showError={errors["id"]}
          placeHolder={"Nh???p id"}
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
          placeHolder={"Nh???p b??? l???c s???n ph???m"}
          label={"Nh??m b??? l???c s???n ph???m"}
          table={"b??? l???c s???n ph???m"}
          setData={(item) => setValue("groupFilterFunctionProduct", item)}
          concat={{ data1: "groupProductFilter", data2: "nameGroupProduct" }}
        />
        <InputField
          register={register}
          className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
          showError={errors["nameFunctionProduct"]}
          placeHolder={"Nh???p t??n ch???c n??ng s???n ph???m"}
          name={"nameFunctionProduct"}
          label={"T??n ch???c n??ng s???n ph???m"}
          onChange={() => ""}
          type="text"
          disabled={false}
        />
        <InputField
          register={register}
          className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
          showError={errors["typeFunctionProduct"]}
          placeHolder={"Nh???p lo???i ch???c n??ng s???n ph???m"}
          name={"typeFunctionProduct"}
          label={"Lo???i ch???c n??ng s???n ph???m"}
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
