import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as filtersAction from "../../../../../../actions/filter/index";

function Search(props) {
  //
  const { table } = props;
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const { filters, headers } = useSelector((state) => {
    return {
      filters: state.filters,
      headers: state.headers,
    };
  });
  //
  return (
    <input
      className="w-2/5 ml-4 p-2.5 rounded-3xl 
      bg-white border-solid border-gray-200 border-2"
      placeholder="Tìm kiếm"
      value={keyword}
      onChange={(event) => {
        setKeyword(event.target.value);
        dispatch(
          filtersAction.searchCategoryRequest(
            {
              filters: filters.choose,
              sorter: filters.sorter,
              keyword: event.target.value,
              table,
              index: 0,
            },
            headers
          )
        );
      }}
    />
  );
}

export default Search;
