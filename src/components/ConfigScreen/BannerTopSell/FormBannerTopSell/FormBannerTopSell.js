import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../Form/Button/Button";
import FileUpload from "../../FileUpload/FileUpload";
import IsShowConfig from "../../IsShowConfig/IsShowConfig";
import * as categorysAction from "../../../../actions/category/index";
import api from "../../../../Utils/api";
function FormBannerTopSell(props) {
  //
  const { dataProps, table } = props;
  const [isShow, setIsShow] = useState(true);
  const [fileLeft, setFileLeft] = useState({
    data: null,
    text: false,
  });
  const [fileRight, setFileRight] = useState({
    data: null,
    text: false,
  });
  const dispatch = useDispatch();
  const headers = useSelector((state) => state.headers);
  useEffect(() => {
    //
    if (dataProps) {
      setFileLeft({
        data: dataProps.imageLeft,
        text: false,
      });
      setFileRight({
        data: dataProps.imageRight,
        text: false,
      });
      setIsShow(dataProps.isShow === 0 ? true : false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataProps]);
  const submit = async (data) => {
    let clone = dataProps;
    let resultLeft = null;
    let resultRight = null;
    if (fileLeft.data) {
      if (fileLeft.data.name) {
        const formData = new FormData();
        formData.append("multipartFile", fileLeft.data);
        formData.append("id", `banner__left`);
        formData.append("publicId", "E-Commerce/Banner/");
        resultLeft = await api(
          "updateImageSingle",
          "POST",
          formData,
          Object.assign(headers, {
            "Content-Type": "multipart/form-data",
          })
        );
      }
    }
    if (fileRight.data) {
      if (fileRight.data.name) {
        const formData = new FormData();
        formData.append("multipartFile", fileRight.data);
        formData.append("id", `banner__right`);
        formData.append("publicId", "E-Commerce/Banner/");
        resultRight = await api(
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
      `bannerIndexes`,
      clone ? "PUT" : "POST",
      {
        id: dataProps ? dataProps.id : null,
        imageLeft: resultLeft ? resultLeft.data.url : fileLeft.data,
        imageRight: resultRight ? resultRight.data.url : fileRight.data,
        timeCreated: dataProps ? dataProps.timeCreated : null,
        isShow: isShow ? 0 : 1,
      },
      Object.assign(headers, { "Content-Type": "application/json" })
    );
    setFileLeft({ data: null, text: false });
    setFileRight({ data: null, text: false });
    dispatch(
      categorysAction.loadListCategoryRequest(
        "bannerIndexes",
        null,
        false,
        headers
      )
    );
  };
  //
  return (
    <div className="p-3 w-full">
      <p className="text-2xl mb-5 font-semibold">
        {dataProps ? "Sửa" : "Thêm"} banner
      </p>
      <FileUpload
        file={fileLeft}
        setFile={setFileLeft}
        type="Left"
        index="0"
        isShow={isShow}
        setIsShow={setIsShow}
      />
      <FileUpload
        file={fileRight}
        setFile={setFileRight}
        type="Right"
        index="1"
        isShow={isShow}
        setIsShow={setIsShow}
      />
      <IsShowConfig isShow={isShow} setIsShow={setIsShow} />
      <Button
        onClick={() => submit()}
        propsGet={dataProps}
        table={table}
        headers={headers}
      />
    </div>
  );
}

export default FormBannerTopSell;
