import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as modalsAction from "../../../../../actions/modals/index";
import * as productsAction from "../../../../../actions/products/index";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import api from "../../../../../Utils/api";
// import * as StringUtils from "../../../../../Utils/StringUtils";
function ProductRightFooter(props) {
  //
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  // const convertStringToSlug = (string) => {
  //   return string
  //     .toLowerCase()
  //     .replace(/ /g, "-")
  //     .replace(/[^\w-]+/g, "");
  // };
  const addProduct = async () => {
    let data = products;
    data.descriptions = draftToHtml(
      convertToRaw(data.descriptions.getCurrentContent())
    );
    const lineProduct = await api("lineProducts", "POST", {
      id: null,
      nameLineProduct: data.infoSimple.nameProduct,
      groupProduct: data.infoSimple.groupProduct,
      brandProduct: data.infoSimple.brand,
      height: data.infoSimple.height,
      width: data.infoSimple.width,
      weight: data.infoSimple.weight,
      timeCreated: "09-22-2021 10:02:50",
    });
    await addImageMain(lineProduct.data);
    // let id = 1000000000;
    // const getId = await api("getIdBestNew", "GET", null);
    // if (getId.data === null || getId.data === "") {
    // } else id = Number(getId.data.id.replace("SP", ""));
    async function fetch() {
      for (let index = 0; index < data.infoMain.lists.length; index++) {
        // const list = data.infoMain.lists[index];
        // const pos = listImage.findIndex((item) =>
        //   item.color && list.color ? item.color.id === list.color.id : false
        // );
        // id++;
        // const product = await api("products", "POST", {
        //   id: `SP${id}`,
        //   describeProduct: data.descriptions,
        //   isShow: 1,
        //   slug: `${convertStringToSlug(
        //     StringUtils.removeVietnameseTones(`${list.nameProduct}`)
        //   )}`,
        //   brandProduct: data.infoSimple.brand,
        //   colorProduct: list.color.id === null ? null : list.color,
        //   imageProduct: pos !== -1 ? listImage[pos].image : listImage[0].image,
        //   lineProduct: lineProduct.data,
        //   memoryProduct: list.rom.id === null ? null : list.rom,
        //   userProduct: null,
        //   ramProduct: list.ram && list.ram.id ? list.ram : null,
        // });
        // await api(`infoProducts`, "POST", {
        //   id: null,
        //   infoProduct: product.data,
        //   priceInput: list.priceInput,
        //   priceOutput: list.priceOutput,
        //   sale: list.sale,
        //   itemCurrent: list.amountInput ? list.amountInput : 0,
        //   itemSold: 0,
        //   typeInfoProduct: list.typeInfoProduct ? list.typeInfoProduct : 0,
        //   review: 50,
        //   timeInput: "09-18-2021 05:53:06",
        // });
      }
    }
    fetch();
    await addImageOther(lineProduct.data);
    await addProductAttribute(lineProduct.data);
    await addFunctionProduct(lineProduct.data);
    dispatch(modalsAction.closeModal());
  };
  const addImageMain = async (lineProduct) => {
    let listImage = [];
    for (let index = 0; index < products.imageColor.length; index++) {
      const item = products.imageColor[index];
      const formData = new FormData();
      formData.append("multipartFile", item.image);
      formData.append("id", `${lineProduct.id}__${item.color.id}`);
      formData.append("publicId", "E-Commerce/Products/");
      const result = await api("updateImageSingle", "POST", formData, null);
      const image = await api("images", "POST", {
        id: "",
        alt: "",
        src: result.data.url,
        type: 0,
      });
      listImage.push({ color: item, image: image.data });
    }
    return listImage;
  };
  const addImageOther = async (lineProduct) => {
    for (let index = 0; index < products.images.length; index++) {
      const image = products.images[index];
      const formData = new FormData();
      formData.append("multipartFile", image);
      formData.append("id", index);
      formData.append("publicId", "E-Commerce/Products/");
      const result = await api("updateImageSingle", "POST", formData, null);
      await api("imageOthers", "POST", {
        id: 1,
        lineProductImage: lineProduct,
        src: result.data.url,
        type: 1,
      });
    }
  };
  const addProductAttribute = async (lineProduct) => {
    for (const property in products.infoAttribute) {
      if (products.infoAttribute[property].list.length > 0) {
        for (
          let index = 0;
          index < products.infoAttribute[property].list.length;
          index++
        ) {
          const element = products.infoAttribute[property].list[index];
          await api("attributeProducts", "POST", {
            id: null,
            lineProductAttribute: lineProduct,
            attributeProduct: element.data,
            valueAttributeProduct: element.value,
          });
        }
      }
    }
  };
  const addFunctionProduct = async (lineProduct) => {
    for (let index = 0; index < products.features.choose.length; index++) {
      const feature = products.features.choose[index];
      await api("detailFunctionProducts", "POST", {
        id: null,
        lineProductFunctionProduct: lineProduct,
        functionProductDetail: feature,
      });
    }
  };
  //
  return (
    <div className="w-11/12 mx-auto bg-white text-right pt-1 pb-3 border-t-2 border-solid border-gray-300 mt-4 z-50">
      <button
        onClick={() => {
          dispatch(modalsAction.closeModal());
          dispatch(productsAction.resetDataProductState());
        }}
        type="button"
        className=" py-2.5 px-5 mr-4 rounded-lg bg-gray-500 font-semibold text-xm text-white"
      >
        {"Hủy"}
      </button>
      <button
        onClick={() => {
          if (products.index === 5) {
            addProduct();
            dispatch(productsAction.resetDataProductState());
          } else
            dispatch(
              productsAction.loadCategoryProductByIndex(products.index + 1)
            );
        }}
        type={"button"}
        className=" py-2.5 px-5 rounded-lg bg-organce font-semibold text-xm text-white"
      >
        {products.index === 5 ? "Lưu sản phẩm" : "Tiếp tục"}
      </button>
    </div>
  );
}

export default ProductRightFooter;
