import React from "react";
// import RowTable from "../RowTable/RowTable";
import Title from "../Title/Title";
import ItemStatus from "./ItemStatus/ItemStatus";

function Table(props) {
  //
  const { title, list } = props;
  const logData = (data, indexList) => {
    return (
      <tr key={indexList}>
        {title.map((item, index) => {
          if (item.name === "STT")
            return (
              <td key={index} className="p-2">
                {indexList + 1}
              </td>
            );
          else if (item.condition.type === 0) {
            return (
              <td key={index} className="p-2">
                <ItemStatus
                  typeData={
                    item.level === 1
                      ? data[item.columnLevel1] === null
                        ? "<Trống>"
                        : data[item.columnLevel1]
                      : data[item.columnLevel1] === null
                      ? "<Trống>"
                      : data[item.columnLevel1][item.columnLevel2]
                  }
                  condition={item.condition.main}
                />
              </td>
            );
          } else if (item.condition.type === 1) {
            return (
              <td key={index} className="p-2">
                <img
                  src={
                    item.level === 1
                      ? data[item.columnLevel1] === null
                        ? "<Trống>"
                        : data[item.columnLevel1]
                      : data[item.columnLevel1] === null
                      ? "<Trống>"
                      : data[item.columnLevel1][item.columnLevel2]
                  }
                  alt=""
                  className="w-28 h-32 object-contain"
                />
              </td>
            );
          } else
            return (
              <td key={index} className="p-2">
                {item.level === 1
                  ? data[item.columnLevel1] === null
                    ? "<Trống>"
                    : data[item.columnLevel1]
                  : data[item.columnLevel1] === null
                  ? "<Trống>"
                  : data[item.columnLevel1][item.columnLevel2]}
              </td>
            );
        })}
      </tr>
    );
  };
  //
  return (
    <div className="w-full wrapper-content-right overflow-x-auto max-w-full p-3">
      <table className="w-full bg-white">
        <tbody>
          <Title title={title} />

          {list.map((data, indexList) => {
            return logData(data, indexList);
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
