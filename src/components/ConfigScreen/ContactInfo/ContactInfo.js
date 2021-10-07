import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import api from "../../../Utils/api";

import InputConfigScreen from "../InputConfigScreen/InputConfigScreen";
import FormContactInfo from "./FormContactInfo/FormContactInfo";

function ContactInfo(props) {
  //
  const schema = Yup.object().shape({
    nameCompany: Yup.string().required("Tên công ty không được trống !!"),
    phone: Yup.string().required("Số điện thoại không được trống !!"),
    email: Yup.string().required("Email không được trống !!"),
    address: Yup.string().required("Địa chỉ không được trống !!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
    shouldUnregister: false,
  });
  const headers = useSelector((state) => state.headers);
  const [data, setData] = useState([]);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await api(`configWebsites/type/2`, "GET", null, headers);
      if (unmounted) return;
      setData(result.data);
      const value = JSON.parse(result.data.content);
      setValue("nameCompany", value.data.nameCompany);
      setValue("phone", value.data.phone);
      setValue("email", value.data.email);
      setValue("address", value.data.address);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <>
      <InputConfigScreen />
      <div className="w-full flex-1  flex items-center justify-center">
        <FormContactInfo
          data={data}
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}

export default ContactInfo;
