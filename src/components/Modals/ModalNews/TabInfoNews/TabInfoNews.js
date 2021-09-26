import React, { useEffect, useState } from "react";
import InputField from "../../../InputField/InputField";
import SelectCustom from "../../../SelectCustom/SelectCustom";

function TabInfoNews(props) {
  //
  const [fileData, setFileData] = useState(null);
  const { register, setValue, errors, categoryNewsList, data } = props;
  useEffect(() => {
    //
    if (data) {
      setValue("title", data.title);
      setValue("contentShort", data.describeSmall);
      setValue("categoryNews", data.categoryNews);
    }
    //
  }, []);
  //
  return (
    <div className="w-full mx-auto my-2 flex">
      <div className="w-3/5">
        <InputField
          register={register}
          showError={errors["title"]}
          type="text"
          className="w-full p-3 rounded-full my-1 border-2 border-solid border-gray-200"
          placeHolder="Tiêu đề"
          name="title"
          onChange={() => ""}
        />
        <InputField
          register={register}
          showError={errors["contentShort"]}
          type="text"
          className="w-full p-3 rounded-full my-1 border-2 border-solid border-gray-200"
          placeHolder="Nội dung ngắn"
          name="contentShort"
          onChange={() => ""}
        />
        <InputField
          register={register}
          showError={errors["thumbnail"]}
          type="file"
          className="w-full p-3 rounded-full my-1 border-2 border-solid border-gray-200"
          placeHolder="Ảnh thu nhỏ"
          name="thumbnail"
          onChange={(file) => setFileData(file)}
          file={true}
        />
        <SelectCustom
          list={categoryNewsList}
          className="w-full p-3 rounded-full my-1 border-2 border-solid border-gray-200 relative"
          attribute={"nameCategoryNews"}
          label={"Danh mục tin tức"}
          table={"danh mục tin tức"}
          setData={(item) => setValue("categoryNews", item)}
          dataProps={data ? data.categoryNews.nameCategoryNews : null}
        />
      </div>
      <div className="w-2/5 p-1 mx-2 flex items-center relative">
        <span
          onClick={() => {
            if (fileData) setFileData(null);
          }}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100  hover:bg-gray-300 absolute top-0 right-0 cursor-pointer text-2xl transform -translate-y-1"
        >
          &times;
        </span>
        <img
          src={
            fileData
              ? URL.createObjectURL(fileData)
              : data
              ? data.thumbnail
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXYdHusTllj5ZOEIVaqE8x5jwsdipeHWKloVM1kM7CgSljst_YbtSj6ayC3hWwZBUhqhk&usqp=CAU"
          }
          className="w-full object-contain p-2"
          alt=""
        />
      </div>
    </div>
  );
}

export default TabInfoNews;
