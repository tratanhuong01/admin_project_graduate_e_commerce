import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../../../Utils/api";
import InputField from "../../../../InputField/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import SelectCustom from "../../../../SelectCustom/SelectCustom";
import * as productsAction from "../../../../../actions/products/index";
import DateInfoSimple from "./DateInfoSimple/DateInfoSimple";
import ValidForm from "./ValidForm";
function InfoSimple(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(ValidForm),
    shouldUnregister: false,
  });
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [groupProduct, setGroupProduct] = useState([]);
  const [brand, setBrand] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    //
    setValue("nameLineProduct", products.infoSimple.nameProduct);
    setValue("dateInput", products.infoSimple.dateInput);
    setValue("dateOutput", products.infoSimple.dateOutput);
    let unmounted = false;
    async function fetch() {
      const result1 = await api("categoryProductsAll", "GET", null);
      const result2 = await api("brandsAll", "GET", null);
      Promise.all([result1, result2])
        .then((res) => {
          if (unmounted) return;
          setCategoryProduct(res[0].data);
          setBrand(res[1].data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = () => {};
  return (
    <div
      className="w-11/12 mx-auto overflow-y-auto scrollbar-css"
      style={{
        height: 530,
        maxHeight: 530,
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <DateInfoSimple register={register} errors={errors} />
        <SelectCustom
          list={categoryProduct}
          className={
            "w-full rounded-lg p-2.5 border-2 border-solid border-gray-300 mt-2 relative"
          }
          attribute={"nameCategoryProduct"}
          placeHolder={"Nhập nội dung"}
          label={"Danh mục sản phẩm"}
          table={"danh mục sản phẩm"}
          dataProps={
            products.infoSimple.categoryProduct
              ? products.infoSimple.categoryProduct.nameCategoryProduct
              : null
          }
          setData={(item) => {
            setGroupProduct([]);
            let unmounted = false;
            async function fetch() {
              const result = await api(
                `groupProductsByCategory/${item.id}`,
                "GET",
                null
              );
              if (unmounted) return;
              dispatch(productsAction.loadSimpleInfoProductData(item, 0));
              setGroupProduct(result.data);
            }
            fetch();
            return () => {
              unmounted = true;
            };
          }}
        />
        <SelectCustom
          list={groupProduct}
          className={
            "w-full rounded-lg p-2.5 border-2 border-solid border-gray-300 mt-2 relative"
          }
          attribute={"nameGroupProduct"}
          placeHolder={"Nhập nội dung"}
          label={"Nhóm sản phẩm"}
          table={"nhóm sản phẩm"}
          dataProps={
            products.infoSimple.groupProduct
              ? products.infoSimple.groupProduct.nameGroupProduct
              : null
          }
          setData={(item) => {
            dispatch(productsAction.loadSimpleInfoProductData(item, 1));
          }}
          disabled={
            groupProduct.length === 0 && !products.infoSimple.groupProduct
              ? true
              : false
          }
        />
        <InputField
          register={register}
          className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
          showError={errors["nameLineProduct"]}
          placeHolder={"Nhập tên sản phẩm"}
          name={"nameLineProduct"}
          label={"Tên sản phẩm"}
          type="text"
          onChange={(item) =>
            dispatch(productsAction.loadSimpleInfoProductData(item, 2))
          }
          disabled={false}
        />
        <SelectCustom
          list={brand}
          className={
            "w-full rounded-lg p-2.5 border-2 border-solid border-gray-300 mt-2 relative"
          }
          attribute={"nameBrand"}
          dataProps={
            products.infoSimple.brand
              ? products.infoSimple.brand.nameBrand
              : null
          }
          placeHolder={"Nhập nội dung"}
          label={"Thương hiệu sản phẩm"}
          table={"thương hiệu sản phẩm"}
          setData={(item) =>
            dispatch(productsAction.loadSimpleInfoProductData(item, 3))
          }
        />
      </form>
    </div>
  );
}

export default InfoSimple;
