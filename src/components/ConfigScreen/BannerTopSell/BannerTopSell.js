import React, { useEffect, useRef } from "react";
import { useNotModal } from "../../../hooks/useNotModal";
import NotModalTop from "../../Index/IndexRight/Category/NotModal/NotModalTop/NotModalTop";
import InputConfigScreen from "../InputConfigScreen/InputConfigScreen";
import feature from "./TableBannerTopSell/feature";
import TableBannerTopSell from "./TableBannerTopSell/TableBannerTopSell";
function BannerTopSell(props) {
  //
  const { category, form } = useNotModal(feature.nameTable);
  const ref = useRef(null);
  useEffect(() => {
    //
    if (ref && ref.current)
      ref.current.style.maxHeight = ref.current.offsetHeight - 0 + "px";
    //
  }, [form]);
  //
  return (
    <>
      <InputConfigScreen />
      <div className="w-full flex-1 flex items-center justify-center">
        <div className="w-full h-full flex">
          <div
            ref={ref}
            className="w-1/2 h-full max-h-full overflow-y-auto scrollbar-css"
          >
            {form.data}
          </div>
          <div className="w-1/2 h-full">
            <NotModalTop category={category} table={feature.nameTable} />
            <TableBannerTopSell />
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerTopSell;
