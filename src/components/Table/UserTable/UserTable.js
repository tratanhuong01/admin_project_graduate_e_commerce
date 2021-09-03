import React from "react";
import Title from "../../Index/IndexRight/General/Title/Title";
import RowUserTable from "./RowUserTable/RowUserTable";

function UserTable(props) {
  //
  const { feature, category } = props;
  //
  return (
    <>
      <Title title={feature.table} />
      {category.list &&
        category.list.map((item, index) => {
          return (
            <RowUserTable
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

export default UserTable;
