import React from "react";
import FormLogin from "../../components/Login/FormLogin/FormLogin";
import logo from "../../assets/images/logo.png";
function MainLogin(props) {
  //
  //
  return (
    <div className="w-full h-screen relative bg-gray-100">
      <div
        className="w-1/4 items-center justify-center absolute left-1/2"
        style={{ transform: " translate(-50%,-50%)", top: "42%" }}
      >
        <div className="flex  justify-center  object-cover rounded-full mx-auto my-7">
          <img src={logo} className=" h-20 object-cover rounded-full" alt="" />
        </div>
        <FormLogin />
      </div>
    </div>
  );
}

export default MainLogin;
