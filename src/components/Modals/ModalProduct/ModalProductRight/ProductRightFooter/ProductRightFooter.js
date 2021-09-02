import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as modalsAction from "../../../../../actions/modals/index";
import * as productsAction from "../../../../../actions/products/index";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import axios from "axios";
import api from "../../../../../Utils/api";
function ProductRightFooter(props) {
  //
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const addProduct = async () => {
    let data = products;
    data.descriptions = draftToHtml(
      convertToRaw(data.descriptions.getCurrentContent())
    );
    if (data.lineProduct) {
      console.log(data);
    } else {
      const lineProduct = await api("lineProducts", "POST", {
        id: "",
        nameLineProduct: data.infoSimple.nameProduct,
        groupProduct: data.infoSimple.groupProduct,
      });
      const listImage = await addImageMain();
      let id = 1000000000;
      const getId = await api("getIdBestNew", "GET", null);
      if (getId.data === null || getId.data === "") {
      } else {
        id = Number(getId.data.id.replace("SP", ""));
      }
      let listPromise = [];
      let listIdProduct = [];
      let listPromisePrice = [];
      for (let index = 0; index < data.infoMain.lists.length; index++) {
        const list = data.infoMain.lists[index];
        const pos = listImage.findIndex((item) =>
          item.color && list.color ? item.color.id === list.color.id : false
        );
        id++;
        listIdProduct.push({
          id: `SP${id}`,
          priceInput: list.priceInput,
          priceOutput: list.priceOutput,
          dateInput: data.infoSimple.dateInput,
          dateOutput: data.infoSimple.dateOutput,
          amountInput: list.amountInput,
          amountOutput: list.amountOutput,
          sale: list.sale,
        });
        console.log(list);
        listPromise.push(
          await api("products", "POST", {
            id: `SP${id}`,
            describeProduct: data.descriptions,
            isShow: 1,
            slug: list.nameProduct,
            brandProduct: data.infoSimple.brand,
            colorProduct: list.color.id === null ? null : list.color,
            imageProduct:
              pos !== -1 ? listImage[pos].image : listImage[0].image,
            lineProduct: lineProduct.data,
            memoryProduct: list.rom.id === null ? null : list.rom,
            userProduct: null,
            ramProduct: list.ram,
          })
        );
      }
      listIdProduct.forEach(async (item) => {
        listPromisePrice.push(
          await api("productInputs", "POST", {
            productInput: {
              id: null,
              amount: item.amountInput,
              priceInput: Number(item.priceInput),
              timeInput: "2021-08-08 18:30:30",
              productInputs: null,
            },
            id: item.id,
          })
        );
        listPromisePrice.push(
          await api("productOutputs", "POST", {
            productOutput: {
              id: null,
              amount: item.amountOutput,
              priceOutput: Number(item.priceOutput),
              timeOutput: "2021-08-08 18:30:30",
              productOutputs: null,
            },
            id: item.id,
          })
        );
        listPromisePrice.push(
          await api("sales", "POST", {
            sale: {
              id: null,
              productSale: null,
              percent: item.sale,
              timeStart: "08-12-2021 15:19:09",
              timeEnd: "08-09-2021 15:19:09",
            },
            id: item.id,
          })
        );
      });
      axios
        .all(listPromise)
        .then(axios.spread((...responses) => {}))
        .catch((errors) => {});
      axios
        .all(listPromisePrice)
        .then(axios.spread((...responses) => {}))
        .catch((errors) => {
          // react on errors.
        });
      await addImageOther(lineProduct);
      await addProductAttribute(lineProduct);
      await addFunctionProduct(lineProduct);
    }
  };
  const addImageMain = async () => {
    let listImage = [];
    if (products.infoMain.colors.length > 0) {
      for (let index = 0; index < products.infoMain.colors.length; index++) {
        const color = products.infoMain.colors[index];
        const formData = new FormData();
        formData.append("multipartFile", products.infoMain.images[color.id]);
        formData.append("id", "1000");
        formData.append("publicId", "E-Commerce/Products/");
        const result = await api("updateImageSingle", "POST", formData, null);
        const image = await api("images", "POST", {
          id: "",
          alt: "",
          src: result.url,
          type: 0,
        });
        listImage.push({ color: color, image: image.data });
      }
    } else {
      const formData = new FormData();
      formData.append("multipartFile", products.infoMain.images[-1]);
      formData.append("id", "1000");
      formData.append("publicId", "E-Commerce/Products/");
      const result = await api("updateImageSingle", "POST", formData, null);
      let image = await api("images", "POST", {
        id: "",
        alt: "",
        src: result.data.url,
        type: 0,
      });
      listImage.push(listImage.push({ color: null, image: image.data }));
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
        src: result.url,
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
            id: -1,
            lineProductAttribute: lineProduct,
            attributeProduct: element.data,
            valueAttributeProduct: element.value,
          });
        }
      }
    }
  };
  const addFunctionProduct = async (lineProduct) => {
    for (let index = 0; index < products.features.length; index++) {
      const feature = products.features[index];
      await api("detailFunctionProducts", "POST", {
        id: -1,
        lineProductFunctionProduct: lineProduct,
        functionProductDetail: feature,
      });
    }
  };
  //
  return (
    <div className="w-11/12 mx-auto bg-white text-right pt-1 pb-3 border-t-2 border-solid border-gray-300 mt-4 z-50">
      <button
        onClick={() => dispatch(modalsAction.closeModal())}
        type="button"
        className=" py-2.5 px-5 mr-4 rounded-lg bg-gray-500 font-semibold text-xm text-white"
      >
        {"Hủy"}
      </button>
      <button
        onClick={() => {
          if (products.index === 5) {
            addProduct();
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
