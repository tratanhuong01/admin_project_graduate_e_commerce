import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as filtersAction from "../../../../../../actions/filter/index";
import {
  LOADING_CATEGORY,
  SET_INDEX_CATEGORY,
} from "../../../../../../constants/ActionTypes";

function Search(props) {
  //
  const { table, params } = props;
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState(null);
  const { filters, headers, category } = useSelector((state) => {
    return {
      filters: state.filters,
      headers: state.headers,
      category: state.category,
    };
  });
  useEffect(() => {
    //
    let timeOut;
    dispatch({ type: LOADING_CATEGORY, loading: true });
    if (keyword != null) {
      timeOut = setTimeout(async () => {
        if (category.index !== 0) {
          dispatch({ type: SET_INDEX_CATEGORY, index: 0 });
        }
        dispatch(
          filtersAction.searchCategoryRequest(
            {
              filters: filters.choose,
              sorter: filters.sorter,
              keyword: keyword,
              table,
              index: 0,
              params,
              mainFilters: filters
            },
            headers
          )
        );
      }, 300);
    }
    return () => {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);
  //
  return (
    <input
      className="w-2/5 ml-4 p-2.5 rounded-3xl 
      bg-white border-solid border-gray-200 border-2"
      placeholder="Tìm kiếm"
      value={keyword ? keyword : ""}
      onChange={(event) => setKeyword(event.target.value)}
      spellCheck={false}
    />
  );
}

export default Search;
