import React, { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../../../../Utils/api";
import SelectCustom from "../../../../../SelectCustom/SelectCustom";
import * as productsAction from "../../../../../../actions/products/index";

function ColorMemoryRam(props) {
  //
  const [colors, setColors] = useState([]);
  const [roms, setRoms] = useState([]);
  const [rams, setRams] = useState([]);
  useEffect(() => {
    //
    let unmouted = false;
    async function fetch() {
      const colorList = await api("colorsAll", "GET", null);
      const romList = await api("memoriesAll", "GET", null);
      const ramList = await api("ramsAll", "GET", null);
      Promise.all([colorList, romList, ramList])
        .then((res) => {
          if (unmouted) return;
          setColors(res[0].data);
          setRoms(res[1].data);
          setRams(res[2].data);
        })
        .catch((err) => console.log(err));
    }
    fetch();
    return () => {
      return (unmouted = true);
    };
    //
  }, []);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  //
  return (
    <>
      <div className="w-full flex my-1 font-semibold">
        <div className="w-1/2 p-1 mr-3">Màu sắc</div>
        <div className="w-1/2 p-1 flex items-center">Bộ nhớ</div>
      </div>
      <div className="w-full flex">
        <ScrollContainer className="w-1/2 mr-3 max-w-1/2 overflow-x-auto flex p-1 border-2 border-solid border-gray-200 shadow-lg">
          {colors.map((color, index) => {
            const pos = products.infoMain.colors.findIndex(
              (item) => item.id === color.id
            );
            return (
              <div
                onClick={() => {
                  if (pos === -1) {
                    dispatch(
                      productsAction.loadInfoMainProductData(
                        [...products.infoMain.colors, color],
                        0
                      )
                    );
                    dispatch(productsAction.loadInfoMainProductDataFull());
                  }
                }}
                key={index}
                className={`w-10 h-10 rounded-full mr-1.5 flex-shrink-0 cursor-pointer 
                ${pos !== -1 ? "border-2 border-solid border-gray-400" : ""}`}
                style={{ backgroundColor: color.code }}
              ></div>
            );
          })}
        </ScrollContainer>
        <div className="w-1/2 flex">
          <div className="w-1/2 mr-2">
            <SelectCustom
              list={rams}
              className={
                "w-full rounded-lg p-2.5 border-2 border-solid border-gray-300 mb-2 relative"
              }
              attribute={"id"}
              placeHolder={"Nhập ram"}
              label={""}
              table={"ram"}
              setData={(item) => {
                dispatch(productsAction.loadInfoMainProductData(item, 2));
              }}
            />
          </div>
          <div className="w-1/2">
            <SelectCustom
              list={roms}
              className={
                "w-full rounded-lg p-2.5 border-2 border-solid border-gray-300 mb-2 relative"
              }
              attribute={"id"}
              placeHolder={"Nhập rom"}
              label={""}
              table={"rom"}
              setData={(item) => {
                const pos = products.infoMain.roms.findIndex(
                  (dt) => dt.id === item.id
                );
                if (pos === -1) {
                  dispatch(
                    productsAction.loadInfoMainProductData(
                      [...products.infoMain.roms, item],
                      1
                    )
                  );
                  dispatch(productsAction.loadInfoMainProductDataFull());
                }
              }}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex">
        <ScrollContainer className="w-1/2 mr-3 max-w-1/2 overflow-x-auto flex p-1 border-2 border-solid border-gray-200 shadow-lg items-center">
          {products.infoMain.colors.map((color, index) => {
            return (
              <div
                key={index}
                className="w-7 h-7 ml-1 rounded-full mr-1.5 flex-shrink-0 cursor-pointer relative"
              >
                <div
                  className="w-7 h-7 rounded-full flex-shrink-0"
                  style={{ backgroundColor: color.code }}
                ></div>
                <span
                  onClick={() => {
                    dispatch(
                      productsAction.removeInfoMainProduct(color, "color")
                    );
                    if (
                      products.infoMain.index > products.infoMain.lists.length
                    ) {
                      dispatch(
                        productsAction.loadInfoMainProductByIndex(
                          products.infoMain.lists.length - 1
                        )
                      );
                    }
                    if (
                      products.infoMain.colors.length === 0 &&
                      products.infoMain.roms.length === 0
                    )
                      return;
                    dispatch(productsAction.loadInfoMainProductDataFull());
                  }}
                  className="w-4 h-4 bg-white rounded-full flex items-center justify-center absolute -top-1.5 -right-1.5"
                >
                  <i className="bx bx-x" />
                </span>
              </div>
            );
          })}
        </ScrollContainer>
        <ScrollContainer className="w-1/2 max-w-1/2 overflow-x-auto flex p-1 border-2  border-solid border-gray-200 shadow-lg">
          {products.infoMain.roms.map((rom, index) => {
            return (
              <div
                onClick={() => {
                  dispatch(productsAction.removeInfoMainProduct(rom, "rom"));
                  if (
                    products.infoMain.index > products.infoMain.lists.length
                  ) {
                    dispatch(
                      productsAction.loadInfoMainProductByIndex(
                        products.infoMain.lists.length - 1
                      )
                    );
                  }
                  if (
                    products.infoMain.colors.length === 0 &&
                    products.infoMain.roms.length === 0
                  )
                    return;
                  dispatch(productsAction.loadInfoMainProductDataFull());
                }}
                key={index}
                className="px-2 h-10 rounded-lg font-semibold mr-1.5 flex-shrink-0 flex items-center 
                justify-center border-2 border-solid border-gray-200 cursor-pointer text-xs"
              >
                {rom.id}
              </div>
            );
          })}
        </ScrollContainer>
      </div>
    </>
  );
}

export default ColorMemoryRam;
