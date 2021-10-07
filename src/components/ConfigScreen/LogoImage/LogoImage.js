import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../../Utils/api";
import InputConfigScreen from "../InputConfigScreen/InputConfigScreen";

function LogoImage(props) {
  //
  const [file, setFile] = useState(null);
  const [logo, setLogo] = useState(null);
  const [loading, setLoading] = useState(false);
  const headers = useSelector((state) => state.headers);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await api(
        `configWebsites/type/${1}`,
        "GET",
        null,
        headers
      );
      if (unmounted) return;
      setLogo(result.data);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const submit = async () => {
    setLoading(true);
    let data = logo;
    const formData = new FormData();
    formData.append("multipartFile", file);
    formData.append("id", "logo");
    formData.append("publicId", "E-Commerce/Config/");
    const result = await api(
      "updateImageSingle",
      "POST",
      formData,
      Object.assign(headers, {
        "Content-Type": "multipart/form-data",
      })
    );
    data.content = JSON.stringify({ data: result.data.url });
    await api(
      `configWebsites`,
      "POST",
      data,
      Object.assign(headers, { "Content-Type": "application/json" })
    );
    setFile(null);
  };
  //
  return (
    <>
      <InputConfigScreen />
      <div className="w-full flex-1 flex items-center justify-center flex-col">
        <p className="font-semibold mb-4 text-xl">Logo hiện tại</p>
        <div className="flex">
          <img
            src={logo && JSON.parse(logo.content).data}
            alt=""
            className="w-64 object-cover h-24"
          />
        </div>
        <p className="font-semibold my-4 text-xl">Logo mới</p>
        <input
          type="file"
          className="hidden"
          id="fileAttact"
          onChange={(event) => {
            if (event.target.files.length > 0) {
              setFile(event.target.files[0]);
            }
          }}
        />
        <label htmlFor="fileAttact" className="flex">
          <img
            src={file && URL.createObjectURL(file)}
            alt=""
            className="w-64 object-cover h-24"
          />
        </label>
        <div className="flex justify-center items-center my-3">
          <button
            onClick={() => submit()}
            className={`px-7 py-2.5 rounded-lg text-white font-semibold mx-auto ${
              file
                ? loading
                  ? "bg-gray-600 cursor-not-allowed"
                  : " bg-organce"
                : "bg-gray-600 cursor-not-allowed"
            }`}
            disabled={file ? (loading ? true : false) : true}
          >
            Lưu
          </button>
        </div>
      </div>
    </>
  );
}

export default LogoImage;
