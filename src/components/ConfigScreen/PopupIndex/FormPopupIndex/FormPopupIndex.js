import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../Form/Button/Button";
import FileUpload from "../../FileUpload/FileUpload";
import IsShowConfig from "../../IsShowConfig/IsShowConfig";
import * as categorysAction from "../../../../actions/category/index";
import api from "../../../../Utils/api";
function FormPopupIndex(props) {
  //
  const { dataProps, table } = props;
  const [isShow, setIsShow] = useState(true);
  const [file, setFile] = useState({
    data: null,
    text: false,
  });
  const dispatch = useDispatch();
  const headers = useSelector((state) => state.headers);
  useEffect(() => {
    //
    if (dataProps) {
      setFile({
        data: dataProps.image,
        text: false,
      });
      setIsShow(dataProps.isShow === 0 ? true : false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataProps]);
  const submit = async (data) => {
    let clone = dataProps;
    let result = null;
    if (file.data) {
      if (file.data.name) {
        const formData = new FormData();
        formData.append("multipartFile", file.data);
        formData.append("id", `popup__ads__`);
        formData.append("publicId", "E-Commerce/PopupAds/");
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
      `popupAds`,
      clone ? "PUT" : "POST",
      {
        id: dataProps ? dataProps.id : null,
        image: result ? result.data.url : file.data,
        timeCreated: dataProps ? dataProps.timeCreated : null,
        isShow: isShow ? 0 : 1,
      },
      Object.assign(headers, { "Content-Type": "application/json" })
    );
    setFile({ data: null, text: false });
    dispatch(
      categorysAction.loadListCategoryRequest("popupAds", null, false, headers)
    );
  };
  //
  return (
    <div className="p-3 w-full">
      <p className="text-2xl mb-5 font-semibold">
        {dataProps ? "Sửa" : "Thêm"} Popup
      </p>
      <FileUpload file={file} setFile={setFile} />
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

export default FormPopupIndex;
