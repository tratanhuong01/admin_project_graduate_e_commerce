import React from "react";

function InfoOrderRight(props) {
  //
  const { order } = props;
  const sumProduct = () => {
    let sum = 0;
    order.billDetailList.forEach((element) => {
      sum += element.billDetail.amount * element.billDetail.price;
    });
    return sum;
  };
  //
  return (
    <div className="w-1/3 lg:w-2/5 flex flex-col text-xs text-gray-600 dark:text-white">
      <div
        className="w-full flex items-center justify-end py-4 border-b-2 border-solid 
        border-gray-200"
      >
        {new Intl.NumberFormat().format(sumProduct())} <u>đ</u>
      </div>
      <div
        className="w-full flex items-center justify-end py-4 border-b-2 border-solid 
        border-gray-200"
      >
        {new Intl.NumberFormat().format(order.bill.fee)} <u>đ</u>
      </div>
      <div
        className="w-full flex items-center justify-end py-4 border-b-2 border-solid 
        border-gray-200"
      >
        {new Intl.NumberFormat().format(order.bill.sale)} <u>đ</u>
      </div>
      <div
        className="w-full flex items-center justify-end py-4 border-b-2 border-solid 
        border-gray-200 text-organce font-semibold"
      >
        {new Intl.NumberFormat().format(order.bill.total)} <u>đ</u>
      </div>
    </div>
  );
}

export default InfoOrderRight;
