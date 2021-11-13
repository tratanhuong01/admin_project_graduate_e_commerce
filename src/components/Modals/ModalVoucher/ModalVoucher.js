import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import ModalWrapper from "../ModalWrapper";
import FormVoucher from "./FormVoucher/FormVoucher";
import * as Yup from "yup";
import * as categorysAction from "../../../actions/category/index";
import { useDispatch, useSelector } from "react-redux";
import * as modalsAction from "../../../actions/modals/index";
import * as StringUtils from "../../../Utils/StringUtils";
function ModalVoucher(props) {
  //
  const dispatch = useDispatch();
  const { data } = props;
  const schema = Yup.object().shape({
    // id: Yup.string(),
    // code: Yup.string().required("Mã giảm giá không được trống !!"),
    // nameDiscountCode: Yup.string().required(
    //   "Tên mã giảm giá không được trống !!"
    // ),
    // timeStart: Yup.string().required("Thời gian bắt đầu không được trống !!"),
    // timeExpired: Yup.string().required(
    //   "Thời gian kết thúc không được trống !!"
    // ),
    // percent: Yup.number("Phải là số !!")
    //   .integer("Phải là số !!")
    //   .required("Phần trăm không được trống !!"),
    // amount: Yup.number("Phải là số !!")
    //   .integer("Phải là số !!")
    //   .required("Số lượng không được trống !!"),
    // type: Yup.string().required("Loại không được trống !!"),
    // min: Yup.number("Phải là số !!")
    //   .integer("Phải là số !!")
    //   .required("Min không được trống !!"),
    // max: Yup.number("Phải là số !!")
    //   .integer("Phải là số !!")
    //   .required("Max không được trống !!"),
    // timeCreated: Yup.string(),
  });
  const { filters, headers, category } = useSelector((state) => {
    return {
      filters: state.filters,
      headers: state.headers,
      category: state.category,
    };
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
  useEffect(() => {
    //
    if (data) {
      setValue(
        "timeStart",
        StringUtils.formatDateTimeCustomReturn(data.timeStart)
      );
      setValue(
        "timeExpired",
        StringUtils.formatDateTimeCustomReturn(data.timeExpired)
      );
      setValue("id", data.id);
      setValue("code", data.code);
      setValue("nameDiscountCode", data.nameDiscountCode);
      setValue("percent", data.percent);
      setValue("amount", data.amount);
      setValue("type", data.type);
      setValue("min", data.min);
      setValue("max", data.max);
      setValue("timeCreated", data.timeCreated);
    } else {
      setValue("id", -1);
      setValue("percent", 0);
      setValue("amount", 1);
      setValue("min", 0);
      setValue("max", 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const submitForm = (datas) => {
    datas.timeStart = StringUtils.formatDateTimeCustom(datas.timeStart);
    datas.timeExpired = StringUtils.formatDateTimeCustom(datas.timeExpired);
    console.log(datas);
    dispatch(
      categorysAction.addCategoryRequest(
        datas,
        "discountCode",
        {
          full: `?`,
          limit: `?limit=${10}&offset=${category.index}`,
        },
        true,
        {
          filters: filters.choose,
          sorter: filters.sorter,
          search: filters.search,
        },
        headers
      )
    );
    dispatch(modalsAction.closeModal());
  };
  //
  return (
    <ModalWrapper
      className="shadow-sm border border-solid border-gray-500 bg-white w-full fixed z-50 top-1/2 
      left-1/2 dark:bg-dark-second rounded-lg  sm:w-10/12 md:w-2/3 lg:w-2/5 transform 
      -translate-x-1/2 -translate-y-1/2 overflow-y-auto overflow-hidden"
      title={`${data ? "Sửa" : "Thêm"} voucher`}
    >
      <form onSubmit={handleSubmit(submitForm)} className="w-full">
        <FormVoucher
          register={register}
          errors={errors}
          setValue={setValue}
          data={data}
        />
        <div className="mt-3 fixed bottom-0 bg-white w-full pb-3 shadow-lg border-t-4 border-solid border-gray-100 flex">
          <button
            type="submit"
            className=" py-2.5 rounded-lg bg-organce font-semibold text-xm mt-3 text-white flex-1 mx-5"
          >
            {data ? "Sửa" : "Thêm"}
          </button>
        </div>
      </form>
    </ModalWrapper>
  );
}

export default ModalVoucher;
