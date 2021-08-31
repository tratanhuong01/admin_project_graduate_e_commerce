import React, { useEffect, useState } from "react";
import InputField from "../../InputField/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button/Button";
import ValidForm from "./ValidForm";
import api from "../../../Utils/api";
import SelectCustom from "../../SelectCustom/SelectCustom";
// import * as categorysAction from "../../../actions/category/index";
// import { useDispatch } from "react-redux";
function GroupFilterProductForm(props) {
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
  // const dispatch = useDispatch();
  const onSubmit = async (data) => {
    await api("groupFilterProducts", "POST", data);
    setValue("id", "");
    setValue("nameGroupFilterProduct", "");
  };
  const [groupProducts, setGroupProducts] = useState([]);
  useEffect(() => {
    //
    setValue("id", dataProps ? dataProps.id : "");
    setValue(
      "nameGroupFilterProduct",
      dataProps ? dataProps.nameGroupFilterProduct : ""
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataProps]);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await api("groupProductsAll", "GET", null);
      if (unmounted) return;
      setGroupProducts(result.data);
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
      <p className="text-2xl mb-5 font-semibold">Thêm giá trị thuộc tính</p>
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
          list={groupProducts}
          className={
            "w-full rounded-lg p-2.5 border-2 border-solid border-gray-300 mt-2 relative"
          }
          showError={errors["groupProductFilter"]}
          attribute={"nameGroupProduct"}
          placeHolder={"Nhập nội dung"}
          label={"Nhóm sản phẩm"}
          table={"nhóm sản phẩm"}
          setData={(item) => setValue("groupProductFilter", item)}
        />
        <InputField
          register={register}
          className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
          showError={errors["nameGroupFilterProduct"]}
          placeHolder={"Nhập tên nhóm bộ lọc sản phẩm"}
          name={"nameGroupFilterProduct"}
          label={"Tên nhóm bộ lọc sản phẩm"}
          type="text"
          onChange={() => ""}
          disabled={false}
        />
        <Button propsGet={dataProps} />
      </form>
    </div>
  );
}

export default GroupFilterProductForm;
