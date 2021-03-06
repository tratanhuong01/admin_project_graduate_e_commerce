import React, { useEffect, useState } from "react";
import InputField from "../../InputField/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button/Button";
import ValidForm from "./ValidForm";
import { useDispatch, useSelector } from "react-redux";
import * as categorysAction from "../../../actions/category/index";
import api from "../../../Utils/api";
import { SET_LOADING_FORM } from "../../../constants/ActionTypes";
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
  const [image, setImage] = useState({ type: 1, file: null });
  const headers = useSelector((state) => state.headers);
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    dispatch({ type: SET_LOADING_FORM, loading: true });
    const funcOther = async (idBrand, data, headers) => {
      const formData = new FormData();
      formData.append("multipartFile", image.file);
      formData.append("id", `${idBrand}`);
      formData.append("publicId", "E-Commerce/Brands/");
      const result = await api(
        "updateImageSingle",
        "POST",
        formData,
        Object.assign(headers, {
          "Content-Type": "multipart/form-data",
        })
      );
      data.imageBrand = result.data.url;
      await api(
        "brands",
        "PUT",
        data,
        Object.assign(headers, {
          "Content-Type": "application/json",
        })
      );
    };
    dispatch(
      categorysAction.addCategoryRequest(
        Object.assign(data, { timeCreated: (dataProps ? dataProps.timeCreated : null) }),
        table + "s",
        null,
        false,
        null,
        headers,
        image.type === 0 && image.file.name ? funcOther : null
      )
    );
    setValue("id", "");
    setValue("nameBrand", "");
    setValue("imageBrand", "");
    dispatch({ type: SET_LOADING_FORM, loading: false });
  };
  useEffect(() => {
    //
    if (dataProps) {
      setImage({ type: 1, file: dataProps.imageBrand });
      setValue("id", dataProps.id);
      setValue("nameBrand", dataProps.nameBrand);
      setValue("imageBrand", dataProps.imageBrand);
    } else {
      setImage({ type: 1, file: null });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataProps]);
  //
  return (
    <div className="w-10/12">
      <p className="text-2xl mb-5 font-semibold">
        {dataProps ? "S???a" : "Th??m"} th????ng hi???u
      </p>
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
          disabled={false}
        />
        <InputField
          register={register}
          className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
          showError={errors["nameBrand"]}
          placeHolder={"Nh???p t??n thuong hi???u"}
          name={"nameBrand"}
          label={"Th????ng hi???u"}
          onChange={() => ""}
          type="text"
          disabled={false}
        />
        <div className="hidden">
          <InputField
            register={register}
            className="w-full rounded-lg p-2.5 border-2 border-solid mt-2 hidden"
            showError={errors["imageBrand"]}
            placeHolder={"Nh???p ???????ng d???n thuong hi???u"}
            name={"imageBrand"}
            label={"H??nh ???nh th????ng hi???u"}
            onChange={(file) => setImage({ type: 0, file })}
            type="text"
            file={true}
            disabled={false}
          />
        </div>
        <InputField
          register={register}
          className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
          showError={errors["fileImage"]}
          placeHolder={"Nh???p ???????ng d???n thuong hi???u"}
          name={"fileImage"}
          label={"H??nh ???nh th????ng hi???u"}
          onChange={(file) => setImage({ type: 0, file })}
          type="file"
          file={true}
          disabled={false}
        />
        {image.file && (
          <img
            src={
              image.type === 0 ? URL.createObjectURL(image.file) : image.file
            }
            alt=""
            className="w-32 object-cover my-5"
          />
        )}
        <Button propsGet={dataProps} />
      </form>
    </div>
  );
}

export default BrandForm;
