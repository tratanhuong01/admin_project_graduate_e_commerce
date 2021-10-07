import React, { useEffect } from "react";

function IsShowConfig(props) {
  //
  const { isShow, setIsShow } = props;
  useEffect(() => {}, [isShow]);
  //
  return (
    <select
      onChange={(event) => {
        setIsShow(event.target.value === "true" ? true : false);
      }}
      value={isShow}
      className="w-full my-5 p-2.5 rounded-full border-2 border-solid border-gray-200 shadow-lg"
    >
      <option value={true}>Hiển thị</option>
      <option value={false}>Ẩn</option>
    </select>
  );
}

export default IsShowConfig;
