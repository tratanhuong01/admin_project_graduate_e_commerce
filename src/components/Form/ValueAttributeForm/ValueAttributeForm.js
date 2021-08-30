import React, { useEffect, useState } from "react";
import InputField from "../../InputField/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button/Button";
import ValidForm from "./ValidForm";
import SelectCustom from "../../SelectCustom/SelectCustom";
import api from "../../../Utils/api";
function ValueAttributeForm(props) {
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
  const [attributes, setAttributes] = useState([]);
  useEffect(() => {
    //
    setValue("id", dataProps ? dataProps.id : "");
    setValue("valueAttribute", dataProps ? dataProps.valueAttribute : "");
    setValue("value", dataProps ? dataProps.value : "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataProps]);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await api("attributesAll", "GET", null);
      if (unmounted) return;
      setAttributes(result.data);
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
          list={attributes}
          className={
            "w-full rounded-lg p-2.5 border-2 border-solid border-gray-300 mt-2 relative"
          }
          attribute={"nameAttribute"}
          placeHolder={"Nhập tên thuộc tính"}
          label={"Tên thuộc tính"}
          table={"tên thuộc tính"}
          dataProps={null}
          setData={(item) => {}}
        />
        <InputField
          register={register}
          className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
          showError={errors["value"]}
          placeHolder={"Nhập giá trị thuộc tính"}
          name={"value"}
          label={"Tên giá trị thuộc tính"}
          type="text"
          onChange={() => ""}
          disabled={false}
        />
        <Button propsGet={dataProps} />
      </form>
    </div>
  );
}

export default ValueAttributeForm;
