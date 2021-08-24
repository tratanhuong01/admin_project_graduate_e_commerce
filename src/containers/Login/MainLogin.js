import React from "react";
import FormLogin from "../../components/Login/FormLogin/FormLogin";

function MainLogin(props) {
  return (
    <div class="w-full h-screen relative bg-gray-100">
      <div
        class="w-1/4 items-center absolute left-1/2"
        style={{ transform: " translate(-50%,-50%)", top: "42%" }}
      >
        <div class="w-20 h-20 object-cover rounded-full mx-auto my-7">
          <img
            src="/images/products/1.png"
            class="w-20 h-20 object-cover rounded-full"
            alt=""
          />
        </div>
        <FormLogin />
      </div>
    </div>
  );
}

export default MainLogin;
