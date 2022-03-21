import React from "react";
import { useForm } from "react-hook-form";
import ItemFormLogin from "./ItemFormLogin/ItemFormLogin";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as usersAction from "../../../actions/user/index";
import { useDispatch } from "react-redux";
function FormLogin(props) {
  //
  const dispatch = useDispatch();
  const schema = Yup.object().shape({
    emailOrPhone: Yup.string().required(
      "Email hoặc số điện thoại không được trống !!"
    ),
    password: Yup.string()
      .required("Mật khẩu không được trống !!")
      .min(6, "Mật khẩu phải hơn 6 kí tự !!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    shouldUnregister: false,
  });
  //
  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        dispatch(usersAction.loginAccountRequest(data));
      })}
      className="w-full px-4 py-6 bg-white"
    >
      <ItemFormLogin
        label="Email hoặc số điện thoại"
        placeholder="Email hoặc số điện thoại"
        register={register}
        errors={errors["emailOrPhone"]}
        type="text"
        name="emailOrPhone"
      />
      <ItemFormLogin
        label="Mật khẩu"
        placeholder="Mật khẩu"
        register={register}
        errors={errors["password"]}
        type="password"
        name="password"
      />
      <p className="mb-1 font-bold text-center">Demo</p>
      <p className="mb-1 text-sm text-center">Email or phone : admin123456789@gmail.com</p>
      <p className="mb-1 text-sm text-center">Password : huongtra2001</p>
      <div className="w-full flex py-4 justify-between">
        <div>
          <input type="checkbox" className="mr-3 my-3" />
          Lưu đăng nhập
        </div>
        <button type="submit" className="p-2 bg-organce font-bold text-white">
          Đăng nhập
        </button>
      </div>
    </form>
  );
}

export default FormLogin;
