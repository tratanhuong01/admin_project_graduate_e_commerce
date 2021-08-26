import React from "react";
import Pagination from "../../General/Pagination/Pagination";
import Table from "../../General/Table/Table";

function HaveModal(props) {
  //
  const { data, category } = props;
  //
  return (
    <>
      <Table
        type={data.type}
        title={data.table}
        list={category.list}
        category={category}
      />
      <Pagination type={data.type} category={category} table={data.nameTable} />
    </>
  );
}

export default HaveModal;
