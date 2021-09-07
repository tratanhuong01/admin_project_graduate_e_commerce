import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import api from "../../../../../../../Utils/api";
import InputField from "../../../../../../InputField/InputField";
import * as productsAction from "../../../../../../../actions/products/index";
import { useForm } from "react-hook-form";

function ContentByGroupAttribute(props) {
  //
  const { data, infoAttribute } = props;
  const { handleSubmit, setValue, register } = useForm({
    mode: "onChange",
    shouldUnregister: false,
  });
  const onSubmit = (data) => {};
  const [attributes, setAttributes] = useState([]);
  const dispatch = useDispatch();
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
  useEffect(() => {
    //
    if (infoAttribute)
      infoAttribute[data.id].list.forEach((item) => {
        setValue(`${item.data.id}`, item.value);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [infoAttribute]);
  //
  return infoAttribute && data ? (
    <div className="w-full">
      <select
        onChange={(event) => {
          let clone = { ...infoAttribute };
          let list = clone[data.id].list;
          let index = list.findIndex(
            (item) => item.data.id === JSON.parse(event.target.value).id
          );
          if (index === -1)
            list.push({ data: JSON.parse(event.target.value), value: "" });
          clone[data.id].list = list;
          dispatch(productsAction.loadInfoAttributeData(clone));
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
              {item.data.nameAttribute}
              <i
                onClick={() => {
                  let clone = { ...infoAttribute };
                  clone[data.id].list = clone[data.id].list.filter(
                    (dt) => dt.data.id !== item.data.id
                  );
                  dispatch(productsAction.loadInfoAttributeData(clone));
                }}
                className="bx bx-x transform translate-y-0.5 translate-x-0.5 ml-1 
              cursor-pointer"
              ></i>
            </span>
          );
        })}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        {infoAttribute[data.id].list.map((item, index) => {
          return (
            <InputField
              key={index}
              register={register}
              className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
              showError={null}
              placeHolder={`Nhập ${item.data.nameAttribute}`}
              name={`${item.data.id}`}
              label={item.data.nameAttribute}
              type="text"
              onChange={(value) => {
                let clone = { ...infoAttribute };
                let list = clone[data.id].list;
                let index = list.findIndex((dt) => dt.data.id === item.data.id);
                if (index !== -1) list[index].value = value;
                clone[data.id].list = list;
                dispatch(productsAction.loadInfoAttributeData(clone));
              }}
              disabled={false}
            />
          );
        })}
      </form>
    </div>
  ) : (
    ""
  );
}

export default ContentByGroupAttribute;
