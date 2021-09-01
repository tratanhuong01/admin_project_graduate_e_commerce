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
    } else {
      const lineProduct = await api("lineProducts", "POST", {
        id: "",
        nameLineProduct: data.infoSimple.nameProduct,
        groupProduct: data.infoSimple.groupProduct,
      });
      let id = 1000000000;
      const getId = await api("getIdBestNew", "GET", null);
      if (getId.data === null || getId.data === "") {
      } else {
        id = Number(getId.data.id.replace("SP", ""));
      }
      let listImage = [];
      let listPromise = [];
      let listIdProduct = [];
      let listPromisePrice = [];
      if (data.infoMain.colors.length > 0) {
        data.infoMain.colors.forEach(async (color, index) => {
          let image = await api("images", "POST", {
            id: "",
            alt: "",
            src: data.infoMain[index],
            type: 0,
          });
          listImage.push(image.data);
        });
      } else {
        let image = await api("images", "POST", {
          id: "",
          alt: "",
          src: data.infoMain[-1],
          type: 0,
        });
        listImage.push(image.data);
      }
      data.infoMain.lists.forEach(async (list, index) => {
        id++;
        listPromise.push(
          await api("products", "POST", {
            id: `SP${id}`,
            describeProduct: null,
            isShow: 1,
            slug: list.nameProduct,
            brandProduct: data.infoSimple.brand,
            colorProduct: list.color,
            imageProduct: listImage[index][list.color.id],
            lineProduct: lineProduct.data,
            memoryProduct: list.memory,
            userProduct: null,
            ramProduct: list.ram,
          })
        );
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
      });
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
