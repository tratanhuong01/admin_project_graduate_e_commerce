import React from "react";

function Button(props) {
  //
  const { propsGet } = props;
  //
  return (
    <button
      type="submit"
      className=" py-2.5 rounded-lg bg-organce font-semibold text-xm mt-3 text-white w-full"
    >
      {propsGet ? "Sửa" : "Thêm"}
    </button>
  );
}

export default Button;
