import React, { useState } from "react";
import IndexLeft from "./IndexLeft/IndexLeft";
import IndexRight from "./IndexRight/IndexRight";

function MainIndex(props) {
  //
  const { match } = props;
  const [show, setShow] = useState(true);
  //
  return (
    <div className="w-full h-screen flex">
      <>
        <IndexLeft match={match} show={show} setShow={setShow} />
        <IndexRight match={match} show={show} setShow={setShow} />
      </>
    </div>
  );
}

export default MainIndex;
