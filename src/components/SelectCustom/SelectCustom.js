import React, { useEffect, useState } from "react";

function SelectCustom(props) {
  //
  const { className, list, attribute, setData, placeHolder, table, label } =
    props;
  const [listCurrent, setListCurrent] = useState(list);
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [content, setContent] = useState({ [attribute]: `Chọn ${table}` });
  useEffect(() => {
    setListCurrent(list);
  }, [list]);
  //
  return (
    <div className="w-full relative mt-2">
      <label
        className={`${"text-gray-800 z-50 dark:text-white"} text-xm px-1 flex font-semibold`}
      >
        {label}
      </label>
      <div
        onClick={() => {
          if (show) {
            setValue("");
            setListCurrent(list);
          }
          setShow(!show);
        }}
        className={className}
      >
        <i className="bx bx-chevron-down absolute top-1.5 right-3 text-3xl"></i>
        <span>{content[attribute]}</span>
      </div>
      {show && (
        <div className="w-full bg-white absolute top-full mt-0.5 left-0 right-0 z-50">
          <input
            type="text"
            placeholder={placeHolder}
            className={"w-full p-2 border-2 border-solid relative shadow-lg"}
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
              let listNew = [];
              list.forEach((item) => {
                if (
                  item[attribute].toLowerCase().indexOf(event.target.value) !==
                  -1
                )
                  listNew.push(item);
              });
              setListCurrent(listNew);
            }}
          />
          <div className=" overflow-y-auto scrollbar-css max-h-48 w-full border-2 border-solid">
            {listCurrent.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    setData(item);
                    setContent(item);
                    setShow(false);
                    setListCurrent(list);
                    setValue("");
                  }}
                  key={index}
                  className={`w-full p-2 border-b-2 border-solid relative`}
                >
                  {item[attribute]}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectCustom;
