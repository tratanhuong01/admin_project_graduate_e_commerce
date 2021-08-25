import React from "react";
import Category from "../../components/Index/IndexRight/Category/Category";
import futures from "./futures";
function BrandScreen(props) {
  return (
    <div className="w-full">
      <Category data={futures} />
    </div>
  );
}

export default BrandScreen;
