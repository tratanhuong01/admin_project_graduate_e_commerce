import React from "react";
import Zoom from "react-medium-image-zoom";

function RowImage(props) {
  //
  const { src, alt, width, height } = props;
  //
  return (
    <div className={`${width} ${height}`}>
      <Zoom>
        <img
          src={src}
          alt={alt}
          className={`${width} ${height} object-contain mx-auto`}
          loading="lazy"
        />
      </Zoom>
    </div>
  );
}

export default RowImage;
