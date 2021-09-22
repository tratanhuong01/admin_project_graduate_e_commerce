import React from "react";

function VoucherTable(props) {
  //
  const { category, feature } = props;
  //
  return (
    <>
      <Title title={feature.table} />
      {category.list &&
        category.list.map((item, index) => {
          return (
            <RowUserTable
              feature={feature}
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

export default VoucherTable;
