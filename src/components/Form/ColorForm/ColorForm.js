import React, { useEffect, useState } from "react";
import InputField from "../../InputField/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button/Button";
import ValidForm from "./ValidForm";
import { SketchPicker } from "react-color";
import * as categorysAction from "../../../actions/category/index";
import { useDispatch, useSelector } from "react-redux";

function ColorForm(props) {
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
    setColor("");
    setValue("id", "");
    setValue("code", "");
    setValue("description", "");
  };
  const [color, setColor] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    //
    setColor(dataProps ? dataProps.code : "");
    setValue("id", dataProps ? dataProps.id : "");
    setValue("code", dataProps ? dataProps.code : "");
    setValue("description", dataProps ? dataProps.description : "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataProps]);
  //
  return (
    <div className="w-10/12">
      <p className="text-2xl mb-5 font-semibold">Thêm màu</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex relative items-center">
          <div className="w-8/12 flex">
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
          </div>
          <button
            type="button"
            onClick={() => setShow(!show)}
            className=" py-2.5 ml-5 border border-solid border-gray-300 font-semibold px-3 mt-8 flex relative"
          >
            Chọn màu
          </button>
          <div className="absolute w-48 z-50 right-0 mt-2 top-full">
            {show && (
              <SketchPicker
                onClick={() => ""}
                color={color}
                onChangeComplete={(color) => {
                  setShow(false);
                  setColor(color.hex.toUpperCase());
                  setValue("code", color.hex.toUpperCase());
                }}
              />
            )}
          </div>
        </div>
        <InputField
          register={register}
          className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
          showError={errors["code"]}
          placeHolder={"Nhập mã màu"}
          name={"code"}
          label={"Mã màu"}
          onChange={() => ""}
          type="text"
          disabled={true}
        />
        <InputField
          register={register}
          className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
          showError={errors["description"]}
          placeHolder={"Nhập mô tả"}
          name={"description"}
          label={"Mô tả"}
          onChange={() => ""}
          type="text"
          disabled={false}
        />
        <div className="w-full mt-2 p-2.5 flex items-center">
          <div>Live :</div>
          <div
            className="w-16 h-16 border-2 border-solid border-gray-300 
            rounded-full ml-6"
            style={{ backgroundColor: color }}
          ></div>
        </div>
        <Button propsGet={dataProps} />
      </form>
    </div>
  );
}

export default ColorForm;
