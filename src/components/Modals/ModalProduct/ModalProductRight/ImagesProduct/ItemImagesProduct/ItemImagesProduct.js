import React from "react";

function ItemImagesProduct(props) {
  return (
    <div className="w-1/4 h-60 rounded-lg mb-3 relative">
      <span className="w-6 h-6 rounded-full font-semibold text-2xl bg-gray-200 hover:bg-gray-500 absolute top-0 right-0 flex items-center justify-center cursor-pointer hover:text-white">
        <i className="bx bx-x" />
      </span>
      <img
        className="w-full h-60 object-contain rounded-lg"
        alt=""
        src="https://bizweb.dktcdn.net/thumb/large/100/420/160/products/apple-watch-se-40mm-trang-day-vai.png?v=1627911816000"
      />
    </div>
  );
}

export default ItemImagesProduct;
