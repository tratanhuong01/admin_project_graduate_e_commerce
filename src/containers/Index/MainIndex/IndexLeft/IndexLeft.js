import React from "react";
import Category from "../../../../components/Index/IndexLeft/Category/Category";
import InfoAdmin from "../../../../components/Index/IndexLeft/InfoAdmin/InfoAdmin";
import Logo from "../../../../components/Index/IndexLeft/Logo/Logo";

function IndexLeft(props) {
  //
  const { show } = props;
  //
  return (
    <div
      className={`w-32 ${
        show ? " lg:w-60 xl:w-1/5 " : ""
      } shadow-lg h-screen max-h-full overflow-y-auto  scrollbar-css`}
    >
      <Logo show={show} />
      <InfoAdmin show={show} />
      <Category show={show} />
    </div>
  );
}

export default IndexLeft;
