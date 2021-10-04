import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import ModalWrapper from "../ModalWrapper";
import FormVoucher from "./FormVoucher/FormVoucher";
import * as Yup from "yup";
import * as categorysAction from "../../../actions/category/index";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../../actions/modals/index";
function ModalVoucher(props) {
  //
  const dispatch = useDispatch();
  const { data } = props;
  const schema = Yup.object().shape({
    id: Yup.number().integer(),
    code: Yup.string().required("Mã giảm giá không được trống !!"),
    nameDiscountCode: Yup.string().required(
      "Tên mã giảm giá không được trống !!"
    ),
    timeStart: Yup.string().required("Thời gian bắt đầu không được trống !!"),
    timeExpired: Yup.string().required(
      "Thời gian kết thúc không được trống !!"
    ),
    percent: Yup.string().required("Phần trăm không được trống !!"),
    amount: Yup.string().required("Số lượng không được trống !!"),
    type: Yup.string().required("Loại không được trống !!"),
    min: Yup.string().required("Min không được trống !!"),
    max: Yup.string().required("Max không được trống !!"),
    timeCreaed: Yup.string(),
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
      setValue("id", data.id);
      setValue("code", data.code);
      setValue("nameDiscountCode", data.nameDiscountCode);
      setValue("timeStart", data.timeStart);
      setValue("timeExpired", data.timeExpired);
      setValue("percent", data.percent);
      setValue("amount", data.amount);
      setValue("type", data.type);
      setValue("min", data.min);
      setValue("max", data.max);
      setValue("timeCreated", data.timeCreated);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <ModalWrapper
      className="shadow-sm border border-solid border-gray-500 bg-white w-full fixed z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg  sm:w-10/12 md:w-2/3 lg:w-2/5 transform 
      -translate-x-1/2 -translate-y-1/2 overflow-y-auto overflow-hidden"
      title={`${data ? "Sửa" : "Thêm"} voucher`}
    >
      <form
        onSubmit={handleSubmit((datas) => {
          datas.timeStart = `${datas.timeStart} 00:00:00`;
          datas.timeExpired = `${datas.timeExpired} 00:00:00`;
          dispatch(
            categorysAction.addCategoryRequest(
              datas,
              "discountCodes",
              {
                full: `?`,
                limit: `?limit=${10}&offset=${0}`,
              },
              true,
              { filters: [], sorter: null, search: null }
            )
          );
          dispatch(modalsAction.closeModal());
        })}
        className="w-full"
      >
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
