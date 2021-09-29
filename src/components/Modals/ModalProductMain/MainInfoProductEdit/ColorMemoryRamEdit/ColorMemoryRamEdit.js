import React, { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../../../Utils/api";
import SelectCustom from "../../../../SelectCustom/SelectCustom";
// import * as productsAction from "../../../../../actions/products/index";

function ColorMemoryRamEdit(props) {
  //
  const products = useSelector((state) => state.products);
  const [colors, setColors] = useState([]);
  const [roms, setRoms] = useState([]);
  const [rams, setRams] = useState([]);
  useEffect(() => {
    //
    let unmouted = false;
    async function fetch() {
      const colorList = await api(
        `colors/lineProduct/?idLineProduct=${products.infoMainEdit.lineProduct.id}`,
        "GET",
        null
      );
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
    if (products.infoMainEdit) fetch();
    return () => {
      return (unmouted = true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);
  const dispatch = useDispatch();
  //
  return products.infoMainEdit ? (
    <>
      <div className="w-full flex my-1 font-semibold">
        <div className="w-1/2 p-1 mr-3">Màu sắc</div>
        <div className="w-1/2 p-1 flex items-center">Bộ nhớ</div>
      </div>
      <div className="w-full flex">
        <ScrollContainer className="w-1/2 mr-3 max-w-1/2 overflow-x-auto flex p-1 border-2 border-solid border-gray-200 shadow-lg">
          {colors.map((color, index) => {
            return (
              <div
                onClick={() => dispatch(() => "")}
                key={index}
                className={`w-10 h-10 rounded-full mr-1.5 flex-shrink-0 cursor-pointer border-2 border-solid 
                ${
                  color.id === products.infoMainEdit.color.id
                    ? "border-gray-800"
                    : "border-gray-400"
                }`}
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
              attribute={"nameRam"}
              placeHolder={"Nhập ram"}
              label={""}
              table={"ram"}
              setData={(item) => ""}
              dataProps={products.infoMainEdit.ram.nameRam}
            />
          </div>
          <div className="w-1/2">
            <SelectCustom
              list={roms}
              className={
                "w-full rounded-lg p-2.5 border-2 border-solid border-gray-300 mb-2 relative"
              }
              attribute={"nameMemory"}
              placeHolder={"Nhập rom"}
              label={""}
              table={"rom"}
              setData={(item) => ""}
              dataProps={products.infoMainEdit.rom.nameMemory}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex">
        <ScrollContainer className="w-1/2 mr-3 max-w-1/2 overflow-x-auto flex p-1 border-2 border-solid border-gray-200 shadow-lg items-center">
          <div className="w-7 h-7 ml-1 rounded-full mr-1.5 flex-shrink-0 cursor-pointer relative">
            <div
              className="w-7 h-7 rounded-full flex-shrink-0 border-2 border-solid border-gray-500"
              style={{ backgroundColor: products.infoMainEdit.color.code }}
            ></div>
            <span
              onClick={() => ""}
              className="w-4 h-4 bg-white rounded-full flex items-center justify-center absolute -top-1.5 -right-1.5"
            >
              <i className="bx bx-x" />
            </span>
          </div>
        </ScrollContainer>
        <ScrollContainer className="w-1/2 max-w-1/2 overflow-x-auto flex p-1 border-2  border-solid border-gray-200 shadow-lg">
          <div
            className="px-2 h-10 rounded-lg font-semibold mr-1.5 flex-shrink-0 flex items-center 
                justify-center border-2 border-solid border-gray-200 cursor-pointer text-xs"
          >
            {products.infoMainEdit.rom.nameMemory}
          </div>
        </ScrollContainer>
      </div>
    </>
  ) : (
    ""
  );
}

export default ColorMemoryRamEdit;
