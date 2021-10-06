import React, { useState } from "react";

function InputConfigScreen(props) {
  //
  const [content, setContent] = useState(
    "http://localhost:4000/admin/thiet-lap"
  );
  //
  return (
    <div className="w-full flex">
      <div className="w-1/12 flex justify-between items-center">
        <i className="bx bx-left-arrow-alt text-2xl"></i>
        <i className="bx bx-right-arrow-alt text-2xl"></i>
        <i className="bx bx-reset text-2xl"></i>
      </div>
      <input
        type="text"
        placeholder="Tìm kiếm hoặc tìm tên chức năng..."
        className="w-11/12 mx-auto ml-1 p-1.5 px-4 rounded-full border-solid border-2 my-2 focus:border-blue-500"
        spellCheck={false}
        value={content}
        onChange={(event) => {
          if (
            event.target.value.indexOf(
              "http://localhost:4000/admin/thiet-lap"
            ) !== -1
          )
            setContent(event.target.value);
        }}
      />
    </div>
  );
}

export default InputConfigScreen;
