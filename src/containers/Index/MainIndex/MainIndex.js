import React from "react";
import IndexLeft from "./IndexLeft/IndexLeft";
import IndexRight from "./IndexRight/IndexRight";

function MainIndex(props) {
  //
  const { match } = props;
  //
  return (
    <div className="w-full flex">
      <IndexLeft match={match} />
      <IndexRight match={match} />
    </div>
  );
}

export default MainIndex;
