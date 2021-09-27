import React, { useState } from "react";
import InputField from "../../../../InputField/InputField";

function ModeAddFile(props) {
  //
  const { register, errors, setFileData } = props;
  const [data, setData] = useState(true);
  //
  return (
    <>
      <div className="my-2 flex items-center pl-2 font-semibold">
        Thêm hình bằng file{" "}
        <i
          onClick={() => setData(!data)}
          className={`bx bxs-toggle-${
            data ? "right" : "left"
          } text-organce text-6xl ml-5`}
        ></i>
      </div>
      <InputField
        register={register}
        showError={errors[data ? "thumbnailFile" : "thumbnailLink"]}
        type={data ? "file" : "text"}
        className="w-full p-3 rounded-full my-1 border-2 border-solid border-gray-200"
        placeHolder="Ảnh thu nhỏ"
        name={data ? "thumbnailFile" : "thumbnailLink"}
        onChange={(dt) => {
          if (data) setFileData({ type: true, data: dt });
          else setFileData({ type: false, data: dt });
        }}
        file={data}
      />
    </>
  );
}

export default ModeAddFile;
