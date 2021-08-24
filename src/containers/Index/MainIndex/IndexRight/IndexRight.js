import React from "react";
import { useSelector } from "react-redux";
import HeaderTop from "../../../../components/Index/IndexRight/HeaderTop/HeaderTop";

function IndexRight(props) {
  //
  const states = useSelector((state) => {
    return {
      category: state.category,
    };
  });
  const { category } = states;
  //
  return (
    <div className="h-screen index__right">
      <HeaderTop />
      {category.data}
    </div>
  );
}

export default IndexRight;
