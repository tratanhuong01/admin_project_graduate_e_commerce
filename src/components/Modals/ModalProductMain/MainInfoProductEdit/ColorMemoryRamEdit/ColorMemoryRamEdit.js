import React, { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../../../Utils/api";
import SelectCustom from "../../../../SelectCustom/SelectCustom";
import * as productsAction from "../../../../../actions/products/index";

function ColorMemoryRamEdit(props) {
  //
  const { products, headers } = useSelector((state) => {
    return {
      products: state.products,
      headers: state.headers,
    };
  });
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
        null,
        headers
      );
      const romList = await api("memoriesAll", "GET", null, headers);
      const ramList = await api("ramsAll", "GET", null, headers);
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
                onClick={() => {
                  let unmounted = false;
                  async function fetch() {
                    const result = await api(
                      `images/lineProduct/color/?idLineProduct=${products.infoMainEdit.lineProduct.id}&idColor=${color.id}`,
                      "GET",
                      null,
                      headers
                    );
                    if (unmounted) return;
                    dispatch(
                      productsAction.updateInfoMainEdit(
                        result.data.colorProduct,
                        9
                      )
                    );
                    dispatch(
                      productsAction.updateInfoMainEdit(result.data, 10)
                    );
                  }
                  fetch();
                  return () => {
                    unmounted = true;
                  };
                }}
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
              setData={(item) =>
                dispatch(productsAction.updateInfoMainEdit(item, 7))
              }
              dataProps={
                products.infoMainEdit.ram
                  ? products.infoMainEdit.ram.nameRam
                  : null
              }
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
              setData={(item) =>
                dispatch(productsAction.updateInfoMainEdit(item, 8))
              }
              dataProps={
                products.infoMainEdit.rom
                  ? products.infoMainEdit.rom.nameMemory
                  : null
              }
            />
          </div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}

export default ColorMemoryRamEdit;
