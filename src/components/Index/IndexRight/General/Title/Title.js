import React from "react";

function Title(props) {
  //
  const { title } = props;
  //
  return (
    <tr>
      {title.map((item, index) => {
        if (item.name === "CBX")
          return (
            <th className="p-2" key={index}>
              <input type="checkbox" className="transform scale-125" />;
            </th>
          );
        return (
          <th className="p-2" key={index}>
            {item.name}
          </th>
        );
      })}
    </tr>
  );
}

export default Title;
