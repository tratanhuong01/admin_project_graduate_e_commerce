import React, { useEffect } from "react";
import InputField from "../../InputField/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button/Button";
import ValidForm from "./ValidForm";
import * as categorysAction from "../../../actions/category/index";
import { useDispatch, useSelector } from "react-redux";
function GroupAttributeForm(props) {
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
        Object.assign(data, { timeCreated: (dataProps ? dataProps.timeCreated : null) }),
        table + "s",
        null,
        false,
        null,
        headers
      )
    );
    setValue("id", "");
    setValue("nameGroupAttribute", "");
  };
  useEffect(() => {
    //
    setValue("id", dataProps ? dataProps.id : "");
    setValue(
      "nameGroupAttribute",
      dataProps ? dataProps.nameGroupAttribute : ""
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataProps]);
  //
  return (
    <div className="w-10/12">
      <p className="text-2xl mb-5 font-semibold">Thêm nhóm thuộc tính</p>
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
          showError={errors["nameGroupAttribute"]}
          placeHolder={"Nhập tên nhóm thuộc tính"}
          name={"nameGroupAttribute"}
          label={"Tên nhóm thuộc tính"}
          onChange={() => ""}
          type="text"
          disabled={false}
        />
        <Button propsGet={dataProps} />
      </form>
    </div>
  );
}

export default GroupAttributeForm;
