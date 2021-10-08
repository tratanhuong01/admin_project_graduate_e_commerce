import React from "react";

function ItemFormLogin(props) {
  //
  const { label, placeholder, register, errors, type, name } = props;
  const Field = register(name, { required: true });
  //
  return (
    <>
      <p className="my-2">{label}</p>
      <input
        {...Field}
        type={type}
        name={name}
        className="w-full mx-auto border-2 border-gray-100 p-2.5 border-solid"
        placeholder={placeholder}
        autoComplete="true"
      />
      <br />
      {errors && (
        <p className="my-2 text-red-600 font-semibold">{errors.message}</p>
      )}
    </>
  );
}

export default ItemFormLogin;
