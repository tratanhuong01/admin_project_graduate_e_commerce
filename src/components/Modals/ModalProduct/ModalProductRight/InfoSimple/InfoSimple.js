import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../../../../Utils/api";
// import { yupResolver } from "@hookform/resolvers/yup";
import SelectCustom from "../../../../SelectCustom/SelectCustom";
function InfoSimple(props) {
  const {
    handleSubmit,
    // formState: { errors },
  } = useForm({
    mode: "onChange",
    // resolver: yupResolver(ValidForm),
    shouldUnregister: false,
  });
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [groupProduct, setGroupProduct] = useState([]);
  const [lineProduct, setLineProduct] = useState([]);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await api("categoryProductsAll", "GET", null);
      if (unmounted) return;
      setCategoryProduct(result.data);
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
            setLineProduct([]);
            let unmounted = false;
            async function fetch() {
              const result = await api(
                `groupProductsByCategory/${item.id}`,
                "GET",
                null
              );
              if (unmounted) return;
              // setCategoryProduct(item);
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
            let unmounted = false;
            async function fetch() {
              const result = await api(
                `getLineProductsByGroup/${item.id}`,
                "GET",
                null
              );
              if (unmounted) return;
              // setGroupProduct(item);
              setLineProduct(result.data);
            }
            fetch();
            return () => {
              unmounted = true;
            };
          }}
          disabled={groupProduct.length === 0 ? true : false}
        />
        <SelectCustom
          list={lineProduct}
          className={
            "w-full rounded-lg p-2.5 border-2 border-solid border-gray-300 mt-2 relative"
          }
          attribute={"nameLineProduct"}
          placeHolder={"Nhập nội dung"}
          label={"Dòng sản phẩm"}
          table={"dòng sản phẩm"}
          setData={() => ""}
          disabled={lineProduct.length === 0 ? true : false}
        />
        <SelectCustom
          list={[]}
          className={
            "w-full rounded-lg p-2.5 border-2 border-solid border-gray-300 mt-2 relative"
          }
          attribute={"nameGroupProduct"}
          placeHolder={"Nhập nội dung"}
          label={"Thương hiệu sản phẩm"}
          table={"thương hiệu sản phẩm"}
          setData={(item) => setLineProduct(item)}
        />
        <SelectCustom
          list={[]}
          className={
            "w-full rounded-lg p-2.5 border-2 border-solid border-gray-300 mt-2 relative"
          }
          attribute={"status"}
          placeHolder={"Nhập nội dung"}
          label={"Tình trạng"}
          table={"tình trạng"}
          setData={() => ""}
        />
      </form>
    </div>
  );
}

export default InfoSimple;
