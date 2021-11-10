import React from "react";
import InputField from "../../../../InputField/InputField";

function ModeAddFile({ register, errors, setFileData, setIsFile, isFile }) {
  //
  //
  return (
    <>
      <div className="my-2 flex items-center pl-2 font-semibold">
        Thêm hình bằng file{" "}
        <i
          onClick={() => setIsFile(!isFile)}
          className={`bx bxs-toggle-${
            isFile ? "right" : "left"
          } text-organce text-6xl ml-5`}
        ></i>
      </div>
      <InputField
        register={register}
        showError={errors[isFile ? "thumbnailFile" : "thumbnailLink"]}
        type={isFile ? "file" : "text"}
        className="w-full p-3 rounded-full my-1 border-2 border-solid border-gray-200"
        placeHolder="Ảnh thu nhỏ"
        name={isFile ? "thumbnailFile" : "thumbnailLink"}
        onChange={(dt) => {
          if (isFile) setFileData({ type: true, data: dt });
          else setFileData({ type: false, data: dt });
        }}
        file={isFile}
      />
    </>
  );
}

export default ModeAddFile;
