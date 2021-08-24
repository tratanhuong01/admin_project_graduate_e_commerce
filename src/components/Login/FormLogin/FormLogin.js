import React from "react";

function FormLogin(props) {
  return (
    <div class="w-full px-4 py-6 bg-white">
      <p class="my-2">Tên đăng nhập</p>
      <input
        type="text"
        class="w-full mx-auto border-2 border-gray-100 p-2.5 border-solid"
        placeholder="Tên đăng nhập"
      />
      <br />
      <p class="my-2">Mật khẩu</p>
      <input
        type="password"
        class="w-full mx-auto border-2 border-gray-100 p-2.5 border-solid"
        placeholder="Mật khẩu"
      />
      <br />
      <div class="w-full flex py-4">
        <div class="w-1/2">
          <input type="checkbox" class="mr-3 my-3" />
          Lưu đăng nhập
        </div>
        <div class="w-1/2 text-right">
          <button type="submit" class="p-2 bg-blue-500 font-bold text-white">
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
