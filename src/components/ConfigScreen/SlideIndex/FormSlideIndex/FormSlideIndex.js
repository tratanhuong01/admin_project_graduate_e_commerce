import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../Form/Button/Button";
import InputField from "../../../InputField/InputField";
import SelectCustom from "../../../SelectCustom/SelectCustom";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import * as productApi from "../../../../api/productsApi";
import api from "../../../../Utils/api";
import FileUpload from "../../FileUpload/FileUpload";
import * as categorysAction from "../../../../actions/category/index";
import IsShowConfig from "../../IsShowConfig/IsShowConfig";
function FormSlideIndex(props) {
  //
  const { dataProps, table } = props;
  const [file, setFile] = useState({ data: null, text: false });
  const headers = useSelector((state) => state.headers);
  const [lineProducts, setLineProducts] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const schema = Yup.object().shape({
    slogan: Yup.string().required("Slogan không được trống !!"),
    slideProduct: Yup.object(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await productApi.getLineProductsAll();
      if (unmounted) return;
      setLineProducts(result.data);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    //
    if (dataProps) {
      setValue("slogan", dataProps.slogan);
      setValue("slideProduct", dataProps.slideProduct);
      setFile({
        data: dataProps.image,
        text: false,
      });
      setIsShow(dataProps.type === 1 ? false : true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataProps]);
  console.log(isShow);
  const dispatch = useDispatch();
  const submit = async (data) => {
    let clone = dataProps;
    let result = null;
    if (file.data) {
      if (file.data.name) {
        const formData = new FormData();
        formData.append("multipartFile", file.data);
        formData.append("id", `slide__${data.slideProduct.id}__`);
        formData.append("publicId", "E-Commerce/Slides/");
        result = await api(
          "updateImageSingle",
          "POST",
          formData,
          Object.assign(headers, {
            "Content-Type": "multipart/form-data",
          })
        );
      }
    }
    await api(
      `slides`,
      clone ? "PUT" : "POST",
      {
        id: clone ? clone.id : null,
        slideProduct: data.slideProduct,
        image: result ? result.data.url : file.data,
        slogan: data.slogan,
        type: isShow ? 0 : 1,
        timeCreated: clone ? clone.timeCreated : null,
      },
      Object.assign(headers, { "Content-Type": "application/json" })
    );
    setFile({ data: null, text: false });
    setValue("slideProduct", null);
    setValue("slogan", null);
    dispatch(
      categorysAction.loadListCategoryRequest("slides", null, false, headers)
    );
  };
  //
  return (
    <form onSubmit={handleSubmit(submit)} className="p-3 w-full">
      <p className="text-2xl mb-5 font-semibold">
        {dataProps ? "Sửa" : "Thêm"} slide
      </p>
      <InputField
        register={register}
        className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
        showError={errors["slogan"]}
        placeHolder={"Nhập slogan"}
        name={"slogan"}
        label={"Slogan"}
        type="text"
        onChange={() => ""}
        disabled={false}
      />
      <SelectCustom
        list={lineProducts}
        className={
          "w-full rounded-lg p-2.5 border-2 border-solid border-gray-300 mt-2 relative"
        }
        attribute={"nameLineProduct"}
        placeHolder={"Nhập nội dung"}
        label={"Chọn sản phẩm"}
        table={"sản phẩm"}
        setData={(item) => setValue("slideProduct", item)}
        dataProps={
          watch("slideProduct") ? watch("slideProduct").nameLineProduct : null
        }
      />
      <FileUpload file={file} setFile={setFile} />
      <IsShowConfig isShow={isShow} setIsShow={setIsShow} />
      <Button propsGet={dataProps} table={table} />
    </form>
  );
}

export default FormSlideIndex;
