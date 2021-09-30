import React from "react";
import { useDispatch } from "react-redux";
import InputField from "../../../../../InputField/InputField";
import * as productsAction from "../../../../../../actions/products/index";

function DateInfoSimple(props) {
  //
  const { register, errors, edit } = props;
  const dispatch = useDispatch();
  //
  return (
    <div className="w-full flex">
      <div className="w-1/2 pr-5">
        <InputField
          register={register}
          className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
          showError={errors["timeStartSale"]}
          placeHolder={""}
          name={"timeStartSale"}
          label={"Ngày bắt đầu khuyến mãi"}
          type="date"
          onChange={(item) => {
            if (edit) dispatch(productsAction.updateInfoMainEdit(item, 3));
            else dispatch(productsAction.loadInfoMainPriceAmountSale(item, 6));
          }}
          disabled={false}
        />
      </div>
      <div className="w-1/2">
        <InputField
          register={register}
          className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
          showError={errors["timeEndSale"]}
          placeHolder={""}
          name={"timeEndSale"}
          label={"Ngày kết thúc khuyến mãi"}
          type="date"
          onChange={(item) => {
            if (edit) dispatch(productsAction.updateInfoMainEdit(item, 4));
            else dispatch(productsAction.loadInfoMainPriceAmountSale(item, 7));
          }}
          disabled={false}
        />
      </div>
    </div>
  );
}

export default DateInfoSimple;
