import React from "react";
import ContentColor from "./ContentColor/ContentColor";
import ContentText from "./ContentText/ContentText";
import RowImage from "./RowImage/RowImage";

function RowTable(props) {
  //
  const { type, condition, typeData } = props;
  const data = () => {
    switch (type) {
      case 0:
        return <ContentColor condition={condition} typeData={typeData} />;
      case 1:
        return <RowImage typeData={typeData} />;
      default:
        return <ContentText typeData={typeData} />;
    }
  };
  //
  return data();
}

export default RowTable;
