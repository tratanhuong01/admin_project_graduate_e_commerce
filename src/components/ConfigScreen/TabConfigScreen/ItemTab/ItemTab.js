import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as configDatasAction from "../../../../actions/configData/index";
function ItemTab(props) {
  //
  const { item, pos } = props;
  const config = useSelector((state) => state.config);
  const dispatch = useDispatch();
  const remove = async () => {
    dispatch(
      configDatasAction.updateIndexTabs(
        pos - 1 < 0 ? 0 : pos === config.tabs.length - 1 ? pos - 1 : pos
      )
    );
    dispatch(
      configDatasAction.updateTabs(
        config.tabs.filter((tab) => tab.id !== item.id)
      )
    );
  };
  //
  return (
    <div
      className={`w-48 p-2 border-r-2 border-solid border-gray-300 relative  cursor-pointer  ${
        pos === config.index ? "" : "bg-gray-200"
      } `}
    >
      <span
        onClick={() => dispatch(configDatasAction.updateIndexTabs(pos))}
        className="w-3/4 h-full"
      >
        {item.title}
      </span>
      {config.tabs.length === 1 ? (
        !config.tabs[0].isDefault && (
          <i
            onClick={() => remove()}
            className="bx bx-x absolute text-2xl top-1 right-1 cursor-pointer"
          />
        )
      ) : (
        <i
          onClick={() => remove()}
          className="bx bx-x absolute text-2xl top-1 right-1 cursor-pointer"
        />
      )}
    </div>
  );
}

export default ItemTab;
