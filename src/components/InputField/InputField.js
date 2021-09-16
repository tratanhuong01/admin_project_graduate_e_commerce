import React from "react";

function InputField(props) {
  //
  const {
    showError,
    register,
    type,
    className,
    placeHolder,
    name,
    label,
    onChange,
    disabled,
  } = props;

  const Field = register(name, { required: true });
  //
  return (
    <>
      <div className={`w-full relative mt-2`}>
        <label
          className={`${"text-gray-800 z-50 dark:text-white"} text-xm px-1 flex font-semibold`}
        >
          {label}
        </label>
        <input
          {...Field}
          type={type}
          className={
            className +
            ` dark:bg-dark-third dark:text-white ${
              showError
                ? " text-red-500 border-red-500 "
                : " border-gray-300 dark:border-dark-third focus:border-blue-500"
            }`
          }
          onChange={(e) => {
            onChange(e.target.value);
            if (typeof Field === "function") Field.onChange(e);
          }}
          placeholder={placeHolder}
          disabled={disabled}
        />
        <p className="m-2 text-sm w-full text-red-500 font-semibold">
          {showError && showError.message}
        </p>
      </div>
    </>
  );
}

export default InputField;
