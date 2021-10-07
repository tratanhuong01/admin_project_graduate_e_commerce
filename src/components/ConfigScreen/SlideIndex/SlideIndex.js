import React, { useEffect, useRef } from "react";
import InputConfigScreen from "../InputConfigScreen/InputConfigScreen";
import TableSlideIndex from "./TableSlideIndex/TableSlideIndex";
import feature from "./TableSlideIndex/feature";
import { useNotModal } from "../../../hooks/useNotModal";
import NotModalTop from "../../Index/IndexRight/Category/NotModal/NotModalTop/NotModalTop";
function SlideIndex(props) {
  //
  const { category, form } = useNotModal(feature.nameTable);
  const ref = useRef(null);
  useEffect(() => {
    //
    if (ref && ref.current)
      ref.current.style.maxHeight = ref.current.offsetHeight + "px";
    //
  }, []);
  //
  return (
    <>
      <InputConfigScreen />
      <div className="w-full flex-1 flex items-center justify-center">
        <div className="w-full h-full flex">
          <div
            ref={ref}
            className="w-4/12 h-full max-h-full overflow-y-auto scrollbar-css"
          >
            {form.data}
          </div>
          <div className="w-8/12 h-full">
            <NotModalTop category={category} table={feature.nameTable} />
            <TableSlideIndex />
          </div>
        </div>
      </div>
    </>
  );
}

export default SlideIndex;
