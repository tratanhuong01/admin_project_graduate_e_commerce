import React from "react";
import Pagination from "../../General/Pagination/Pagination";
import Table from "../../General/Table/Table";
import NotModalTop from "./NotModalTop/NotModalTop";

function NotModal(props) {
  //
  const { data, category, form } = props;
  //
  return (
    <div className="w-full  py-3">
      <div className="w-full flex">
        <div className="w-2/5">{form.data}</div>
        <div className="w-3/5">
          <NotModalTop category={category} table={data.nameTable} />
          <Table
            type={data.type}
            title={data.table}
            list={category.list}
            category={category}
          />
          <Pagination
            type={data.type}
            table={data.nameTable}
            category={category}
          />
        </div>
      </div>
    </div>
  );
}

export default NotModal;
