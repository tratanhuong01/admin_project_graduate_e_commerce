import React from "react";
import RowTable from "../RowTable/RowTable";
import Title from "../Title/Title";
function Table(props) {
  //
  const { title, list, category } = props;
  const logData = (data, indexList) => {
    return (
      <tr key={indexList}>
        {title.map((item, index) => {
          if (item.name === "STT")
            return (
              <td key={index} className="p-2">
                {category.index === 0
                  ? indexList + 1
                  : indexList + 1 + category.index * 10}
              </td>
            );
          else
            return (
              <td className="p-2" key={index}>
                <RowTable
                  type={item.condition.type}
                  condition={item.condition.main}
                  typeData={
                    item.level === 1
                      ? data[item.columnLevel1] === null
                        ? "<Trống>"
                        : data[item.columnLevel1]
                      : data[item.columnLevel1] === null
                      ? "<Trống>"
                      : data[item.columnLevel1][item.columnLevel2]
                  }
                />
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
