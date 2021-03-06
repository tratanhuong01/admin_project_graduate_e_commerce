import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../../../Utils/api";
import InputField from "../../../../InputField/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import SelectCustom from "../../../../SelectCustom/SelectCustom";
import * as productsAction from "../../../../../actions/products/index";
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
  const { products, headers } = useSelector((state) => {
    return {
      products: state.products,
      headers: state.headers,
    };
  });
  useEffect(() => {
    //
    setValue("nameLineProduct", products.infoSimple.nameProduct);
    setValue("groupProduct", products.infoSimple.groupProduct);
    setValue("categoryProduct", products.infoSimple.categoryProduct);
    setValue("brandProduct", products.infoSimple.brandProduct);
    setValue("dateInput", products.infoSimple.dateInput);
    setValue("dateOutput", products.infoSimple.dateOutput);
    setValue("width", products.infoSimple.width);
    setValue("height", products.infoSimple.height);
    setValue("weight", products.infoSimple.weight);
    let unmounted = false;
    async function fetch() {
      const result1 = await api("categoryProductsAll", "GET", null, headers);
      const result2 = await api("brandsAll", "GET", null, headers);
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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SelectCustom
          list={categoryProduct}
          className={
            "w-full rounded-lg p-2.5 border-2 border-solid border-gray-300 mt-2 relative"
          }
          attribute={"nameCategoryProduct"}
          placeHolder={"Nh???p n???i dung"}
          label={"Danh m???c s???n ph???m"}
          table={"danh m???c s???n ph???m"}
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
                null,
                headers
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
          placeHolder={"Nh???p n???i dung"}
          label={"Nh??m s???n ph???m"}
          table={"nh??m s???n ph???m"}
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
          placeHolder={"Nh???p t??n s???n ph???m"}
          name={"nameLineProduct"}
          label={"T??n s???n ph???m"}
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
          placeHolder={"Nh???p n???i dung"}
          label={"Th????ng hi???u s???n ph???m"}
          table={"th????ng hi???u s???n ph???m"}
          setData={(item) =>
            dispatch(productsAction.loadSimpleInfoProductData(item, 3))
          }
        />
        <InputField
          register={register}
          className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
          showError={errors["width"]}
          placeHolder={"Nh???p chi???u r???ng"}
          name={"width"}
          label={"Chi???u r???ng s???n ph???m"}
          type="text"
          onChange={(item) =>
            dispatch(productsAction.loadSimpleInfoProductData(item, 7))
          }
          disabled={false}
        />
        <InputField
          register={register}
          className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
          showError={errors["height"]}
          placeHolder={"Nh???p chi???u cao"}
          name={"height"}
          label={"Chi???u cao s???n ph???m"}
          type="text"
          onChange={(item) =>
            dispatch(productsAction.loadSimpleInfoProductData(item, 8))
          }
          disabled={false}
        />
        <InputField
          register={register}
          className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
          showError={errors["weight"]}
          placeHolder={"Nh???p C??n n???ng"}
          name={"weight"}
          label={"C??n n???ng s???n ph???m"}
          type="text"
          onChange={(item) =>
            dispatch(productsAction.loadSimpleInfoProductData(item, 9))
          }
          disabled={false}
        />
      </form>
    </>
  );
}

export default InfoSimple;
