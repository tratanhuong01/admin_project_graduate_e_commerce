import React, { useEffect, useState } from "react";
import api from "../../../../../../Utils/api";

function OptionFeatureProduct(props) {
  //
  const { name, table } = props;
  const [data, setData] = useState([]);
  const [dataCurrent, setDataCurrent] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await api(`${table}`, "GET", null);
      if (unmounted) return;
      setData(result.data);
      setDataCurrent(result.data);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    //
  }, []);
  //
  return (
    <div className="w-1/2 p-2.5 border border-solid border-gray-200">
      <input
        type="text"
        className="w-full p-2.5 rounded-lg border border-solid border-gray-200"
        placeholder="Nhập nội dung..."
        onChange={(event) => {
          setValue(event.target.value);
          const result = data.filter(
            (item) =>
              item[name]
                .toLowerCase()
                .indexOf(event.target.value.toLowerCase()) !== -1
          );
          setDataCurrent(result);
        }}
        value={value}
      />
      <div
        className="w-full overflow-y-auto scrollbar-css"
        style={{ maxHeight: 300 }}
      >
        {dataCurrent.map((item, index) => {
          return (
            <div className="w-full p-2.5 hover:bg-gray-100" key={index}>
              {item[name]}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OptionFeatureProduct;
