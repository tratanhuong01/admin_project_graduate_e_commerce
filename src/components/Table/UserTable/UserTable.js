import React from "react";
import Title from "../../Index/IndexRight/General/Title/Title";
import NotResultTable from "../NotResultTable";
import RowUserTable from "./RowUserTable/RowUserTable";

function UserTable(props) {
  //
  const { feature, category } = props;
  //
  return (
    <>
      <Title title={feature.table} />
      {category.list &&
        (category.list.length > 0 ? (
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
          })
        ) : (
          <NotResultTable numRow={13} />
        ))}
    </>
  );
}

export default UserTable;
