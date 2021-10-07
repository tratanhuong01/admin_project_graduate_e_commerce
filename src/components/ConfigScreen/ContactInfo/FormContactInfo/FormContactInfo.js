import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import api from "../../../../Utils/api";
import Button from "../../../Form/Button/Button";
import InputField from "../../../InputField/InputField";

function FormContactInfo(props) {
  //
  const { data } = props;
  const ref = useRef(null);
  useEffect(() => {
    if (ref && ref.current)
      ref.current.style.maxHeight = ref.current.offsetHeight + "px";
  }, []);
  const headers = useSelector((state) => state.headers);
  const { register, errors, handleSubmit } = props;
  const submit = async (dt) => {
    let clone = data;
    clone.content = JSON.stringify({ data: dt });
    await api(`configWebsites`, "PUT", clone, headers);
    alert("Cập nhật thành công !!");
  };
  //
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="w-1/2 mx-auto h-full overflow-y-auto scrollbar-css overflow-x-hidden"
    >
      <InputField
        register={register}
        className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
        showError={errors["nameCompany"]}
        placeHolder={"Nhập tên công ty"}
        name={"nameCompany"}
        label={"Tên công ty"}
        type="text"
        onChange={() => ""}
        disabled={false}
      />
      <InputField
        register={register}
        className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
        showError={errors["phone"]}
        placeHolder={"Nhập số điện thoại..."}
        name={"phone"}
        label={"Số điện thoại"}
        type="text"
        onChange={() => ""}
        disabled={false}
      />
      <InputField
        register={register}
        className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
        showError={errors["email"]}
        placeHolder={"Nhập email..."}
        name={"email"}
        label={"Email"}
        type="text"
        onChange={() => ""}
        disabled={false}
      />
      <InputField
        register={register}
        className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
        showError={errors["address"]}
        placeHolder={"Nhập địa chỉ"}
        name={"address"}
        label={"Địa chỉ"}
        type="text"
        onChange={() => ""}
        disabled={false}
      />
      <Button />
    </form>
  );
}

export default FormContactInfo;
