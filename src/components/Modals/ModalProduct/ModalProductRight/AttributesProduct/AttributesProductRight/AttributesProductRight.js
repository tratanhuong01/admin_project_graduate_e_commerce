import React from "react";
import ContentByGroupAttribute from "./ContentByGroupAttribute/ContentByGroupAttribute";

function AttributesProductRight(props) {
  //
  const { current } = props;
  //
  return current.data ? (
    <div className="w-3/4 pl-6">
      <ContentByGroupAttribute data={current.data} current={current} />
    </div>
  ) : (
    ""
  );
}

export default AttributesProductRight;
