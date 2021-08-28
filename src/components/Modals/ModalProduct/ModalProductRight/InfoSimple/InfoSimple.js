import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import api from "../../../../../Utils/api";
import InputField from "../../../../InputField/InputField";
// import { yupResolver } from "@hookform/resolvers/yup";
import SelectCustom from "../../../../SelectCustom/SelectCustom";
import * as productsAction from "../../../../../actions/products/index";
import DateInfoSimple from "./DateInfoSimple/DateInfoSimple";

function InfoSimple(props) {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    // resolver: yupResolver(ValidForm),
    shouldUnregister: false,
  });
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [groupProduct, setGroupProduct] = useState([]);
  const [brand, setBrand] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    //
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
    //
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
        <DateInfoSimple register={() => ""} errors={errors} />
        <SelectCustom
          list={categoryProduct}
          className={
            "w-full rounded-lg p-2.5 border-2 border-solid border-gray-300 mt-2 relative"
          }
          attribute={"nameCategoryProduct"}
          placeHolder={"Nhập nội dung"}
          label={"Danh mục sản phẩm"}
          table={"danh mục sản phẩm"}
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
          setData={(item) => {
            dispatch(productsAction.loadSimpleInfoProductData(item, 1));
          }}
          disabled={groupProduct.length === 0 ? true : false}
        />
        <InputField
          register={() => ""}
          className="w-full rounded-lg p-2.5 border-2 border-solid mt-2"
          showError={errors["id"]}
          placeHolder={"Nhập tên sản phẩm"}
          name={"id"}
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
