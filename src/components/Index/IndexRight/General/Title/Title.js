import React from "react";

function Title(props) {
  //
  const { title } = props;
  //
  return (
    <tr>
      {title.map((item, index) => {
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
