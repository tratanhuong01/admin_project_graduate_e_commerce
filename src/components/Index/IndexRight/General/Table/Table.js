import React from "react";
// import RowTable from "../RowTable/RowTable";
import Title from "../Title/Title";

function Table(props) {
  //
  const { title } = props;
  //
  return (
    <div className="w-full wrapper-content-right overflow-x-auto max-w-full p-3">
      <table className="w-full bg-white">
        <tbody>
          <Title title={title} />
        </tbody>
      </table>
    </div>
  );
}

export default Table;
