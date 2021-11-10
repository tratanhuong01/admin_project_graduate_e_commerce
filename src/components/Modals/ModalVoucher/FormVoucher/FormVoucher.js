import React from "react";
import InputField from "../../../InputField/InputField";
import SelectCustom from "../../../SelectCustom/SelectCustom";

function FormVoucher(props) {
  //
  const { register, errors, setValue, data } = props;
  const typeVoucher = [
    { type: 0, name: "Miễn phí vận chuyển" },
    { type: 1, name: "Giảm % cho đơn hàng" },
  ];
  //
  return (
    <div
      className="w-full overflow-x-hidden overflow-y-auto scrollbar-css px-3 relative"
      style={{ maxHeight: "calc(95vh)", height: "80vh" }}
    >
      <div className="w-full flex">
        <div className="w-1/3 flex pr-5">
          <InputField
            register={register}
            className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
            showError={errors["code"]}
            placeHolder={"Nhập mã giảm giá..."}
            name={"code"}
            label={"Mã giảm giá"}
            type="text"
            onChange={(value) => setValue("code", value)}
            disabled={false}
          />
        </div>
        <div className="w-2/3 flex">
          <InputField
            register={register}
            className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
            showError={errors["nameDiscountCode"]}
            placeHolder={"Nhập tên mã giảm giá"}
            name={"nameDiscountCode"}
            label={"Tên mã giảm giá"}
            type="text"
            onChange={(value) => setValue("nameDiscountCode", value)}
            disabled={false}
          />
        </div>
      </div>
      <div className="w-full flex">
        <div className="w-1/2 flex pr-5">
          <InputField
            register={register}
            className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
            showError={errors["timeStart"]}
            name={"timeStart"}
            label={"Thời gian bắt đầu khuyến mãi"}
            type="datetime-local"
            onChange={(value) => setValue("timeStart", value)}
            disabled={false}
          />
        </div>
        <div className="w-1/2 flex">
          <InputField
            register={register}
            className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
            showError={errors["timeExpired"]}
            name={"timeExpired"}
            label={"Thời gian kết thúc khuyến mãi"}
            type="datetime-local"
            onChange={(value) => setValue("timeExpired", value)}
            disabled={false}
          />
        </div>
      </div>
      <div className="w-full flex">
        <div className="w-1/2 flex pr-5">
          <InputField
            register={register}
            className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
            showError={errors["min"]}
            placeHolder={"Hóa đơn tối thiểu"}
            name={"min"}
            label={"Hóa đơn tối thiểu"}
            type="number"
            onChange={(value) => setValue("min", value)}
            disabled={false}
          />
        </div>
        <div className="w-1/2 flex">
          <InputField
            register={register}
            className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
            showError={errors["max"]}
            placeHolder={"Hóa đơn tối đa"}
            name={"max"}
            label={"Hóa đơn tối đa"}
            type="number"
            onChange={(value) => setValue("max", value)}
            disabled={false}
          />
        </div>
      </div>
      <div className="w-full flex">
        <div className="w-1/2 flex pr-5">
          <InputField
            register={register}
            className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
            showError={errors["amount"]}
            placeHolder={"Số lượng"}
            name={"amount"}
            label={"Số lượng"}
            type="number"
            onChange={(value) => setValue("amount", value)}
            disabled={false}
          />
        </div>
        <div className="w-1/2 flex">
          <InputField
            register={register}
            className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
            showError={errors["percent"]}
            placeHolder={"Nhập phần trăm"}
            name={"percent"}
            label={"Phần trắm"}
            type="text"
            onChange={(value) => setValue("percent", value)}
            disabled={false}
          />
        </div>
      </div>
      <SelectCustom
        list={typeVoucher}
        className={
          "w-full rounded-lg p-2.5 border-2 border-solid border-gray-300 mt-2 relative"
        }
        attribute={"name"}
        placeHolder={"Nhập nội dung"}
        label={"Loại mã giảm giá"}
        table={" mã giảm giá"}
        setData={(item) => setValue("type", item.type)}
        dataProps={
          data
            ? typeVoucher[typeVoucher.findIndex((dt) => dt.type === data.type)]
                .name
            : null
        }
      />
    </div>
  );
}

export default FormVoucher;
