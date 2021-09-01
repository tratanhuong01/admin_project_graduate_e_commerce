import React from "react";
import { useDispatch } from "react-redux";
import InputField from "../../../../../InputField/InputField";
import * as productsAction from "../../../../../../actions/products/index";

function DateInfoSimple(props) {
  //
  const { register, errors } = props;
  const dispatch = useDispatch();
  //
  return (
    <div className="w-full flex">
      <div className="w-1/2 mr-3">
        <InputField
          register={register}
          className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
          showError={errors["dateInput"]}
          placeHolder={""}
          name={"dateInput"}
          label={"Ngày nhập vào"}
          type="date"
          onChange={(item) =>
            dispatch(productsAction.loadSimpleInfoProductData(item, 4))
          }
          disabled={false}
        />
      </div>
      <div className="w-1/2">
        <InputField
          register={register}
          className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
          showError={errors["dateOutput"]}
          placeHolder={""}
          name={"dateOutput"}
          label={"Ngày bán ra"}
          type="date"
          onChange={(item) =>
            dispatch(productsAction.loadSimpleInfoProductData(item, 5))
          }
          disabled={false}
        />
      </div>
    </div>
  );
}

export default DateInfoSimple;
