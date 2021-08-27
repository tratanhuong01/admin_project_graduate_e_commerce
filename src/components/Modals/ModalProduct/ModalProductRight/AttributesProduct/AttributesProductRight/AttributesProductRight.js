import React, { useEffect } from "react";
import ContentByGroupAttribute from "./ContentByGroupAttribute/ContentByGroupAttribute";

function AttributesProductRight(props) {
  //
  const { current, setInfoAttribute, infoAttribute } = props;
  useEffect(() => {}, [current]);
  //
  return current.data ? (
    <div className="w-3/4 pl-6">
      <ContentByGroupAttribute
        data={current.data}
        setInfoAttribute={setInfoAttribute}
        infoAttribute={infoAttribute}
      />
    </div>
  ) : (
    ""
  );
}

export default AttributesProductRight;
