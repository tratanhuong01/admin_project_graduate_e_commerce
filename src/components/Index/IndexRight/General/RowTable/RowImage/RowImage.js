import React from "react";
import Zoom from "react-medium-image-zoom";

function RowImage(props) {
  //
  const { typeData } = props;
  //
  return (
    <Zoom>
      <img src={typeData} alt="" className="w-28 h-32 object-contain" />
    </Zoom>
  );
}

export default RowImage;
