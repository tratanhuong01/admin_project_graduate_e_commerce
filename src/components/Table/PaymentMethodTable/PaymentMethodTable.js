import React from "react";
import Title from "../../Index/IndexRight/General/Title/Title";
import RowGroupAttributeTable from "../GroupAttributeTable/RowGroupAttributeTable/RowGroupAttributeTable";
import RowPaymentMethodTable from "./RowPaymentMethodTable/RowPaymentMethodTable";

function PaymentMethodTable(props) {
  //
  const { feature, category } = props;
  //
  return (
    <>
      <Title title={feature.table} />
      {category.list &&
        category.list.map((item, index) => {
          return (
            <RowPaymentMethodTable
              item={item}
              key={index}
              category={category}
              index={index}
            />
          );
        })}
    </>
  );
}

export default PaymentMethodTable;
