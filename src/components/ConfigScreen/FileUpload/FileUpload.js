import React from "react";
import image_add_lazing from "../../../assets/images/image_add_lazing.jpg";
function FileUpload(props) {
  //
  const { file, setFile } = props;
  //
  return (
    <>
      <div className="w-full my-3 flex items-center font-bold">
        <i
          onClick={() =>
            setFile({
              data: file.data,
              text: !file.text,
            })
          }
          className={`bx bxs-toggle-${
            file.text ? "left" : "right"
          } text-5xl text-organce mr-3`}
        ></i>{" "}
        Upload dùng file
      </div>
      <input
        type="file"
        id={`fileUploadSlide`}
        className="hidden"
        onChange={(event) => {
          if (event.target.files.length > 0)
            setFile({
              data: event.target.files[0],
              text: file.text,
            });
        }}
      />
      {file.text ? (
        <input
          type="text"
          placeholder="Nhập bằng link"
          onChange={(event) => {
            if (event.target.value.length > 10)
              setFile({
                data: event.target.value,
                text: false,
              });
          }}
          value={file.data ? (file.data.name ? "" : file.data) : ""}
          className="w-full my-5 p-2.5 rounded-full border-2 border-solid border-gray-200 shadow-lg"
        />
      ) : (
        <label
          htmlFor={`fileUploadSlide`}
          className="w-full my-3 flex justify-center"
        >
          <img
            src={
              file.data
                ? file.data.name
                  ? URL.createObjectURL(file.data)
                  : file.data
                : image_add_lazing
            }
            alt=""
            className="max-w-full max-h-80 object-contain"
          />
        </label>
      )}
    </>
  );
}

export default FileUpload;
