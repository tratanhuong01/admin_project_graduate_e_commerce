import React, { useEffect, useState } from "react";
import api from "../../../../../../../Utils/api";
import InputField from "../../../../../../InputField/InputField";

function ContentByGroupAttribute(props) {
  //
  const [attributes, setAttributes] = useState([]);
  const { data, setInfoAttribute, infoAttribute } = props;
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await api(`attributes/${data.id}`, "GET", null);
      if (unmounted) return;
      setAttributes(result.data);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    //
  }, [data]);
  useEffect(() => {}, [infoAttribute]);
  //
  return infoAttribute && data ? (
    <div className="w-full">
      <select
        onChange={(event) => {
          let clone = { ...infoAttribute };
          let list = clone[data.id].list;
          let index = list.findIndex(
            (item) => item.id === JSON.parse(event.target.value).id
          );
          if (index === -1) list.push(JSON.parse(event.target.value));
          clone[data.id].list = list;
          setInfoAttribute(clone);
        }}
        className="w-full p-2 rounded-lg border-2 border-solid border-gray-300"
      >
        {attributes.map((attribute, index) => {
          return (
            <option key={index} value={JSON.stringify(attribute)}>
              {attribute.nameAttribute}
            </option>
          );
        })}
      </select>
      <div className="w-full my-2 max-h-12 p-2 max-h-24 overflow-y-auto flex flex-wrap">
        {infoAttribute[data.id].list.map((item, index) => {
          return (
            <span
              key={index}
              className="py-1 px-2 mt-2 rounded-xl text-sm font-semibold text-blue-600 bg-blue-200 mr-3"
            >
              {item.nameAttribute}
              <i
                onClick={() => {
                  let clone = { ...infoAttribute };
                  let list = clone[data.id].list;
                  let index = list.findIndex((dt) => dt.id === item.id);
                  if (index !== -1) list.splice(index, 1);
                  clone[data.id].list = list;
                  setInfoAttribute(clone);
                }}
                className="bx bx-x transform translate-y-0.5 translate-x-0.5 ml-1 
              cursor-pointer"
              ></i>
            </span>
          );
        })}
      </div>
      <div className="w-full">
        {infoAttribute[data.id].list.map((item, index) => {
          return (
            <InputField
              key={index}
              register={() => ""}
              className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
              showError={null}
              placeHolder={`Nhập ${item.nameAttribute}`}
              name={"id"}
              label={item.nameAttribute}
              type="text"
              onChange={() => ""}
              disabled={false}
            />
          );
        })}
      </div>
    </div>
  ) : (
    ""
  );
}

export default ContentByGroupAttribute;
