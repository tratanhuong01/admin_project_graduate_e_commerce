import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as filtersAction from "../../../../../actions/filter/index";
import * as categorysAction from "../../../../../actions/category/index";

function DateComponent({ table, query }) {
  //

  const { headers, filters } = useSelector((state) => {
    return {
      headers: state.headers,
      filters: state.filters,
    }
  });
  const dispatch = useDispatch();
  const [dateFrom, setDateFrom] = useState(filters.dateFrom);
  const [dateTo, setDateTo] = useState(filters.dateTo);
  const isValidDate = (date) => {
    return date instanceof Date && !isNaN(date);
  }
  const checkDate = (dateFrom, dateTo) => {
    const dateFromCP = new Date(dateFrom);
    const dateToCP = new Date(dateTo);
    if (isValidDate(dateFromCP) && isValidDate(dateToCP))  // d.valueOf() could also work
      if (dateFromCP.getTime() < dateToCP.getTime())
        return true;
    return false;
  }
  //
  return (
    <>
      <span className="mr-2 flex items-center font-bold">Từ</span>
      <input
        type="date"
        onChange={(event) => setDateFrom(event.target.value)}
        value={dateFrom}
        className="p-2.5 w-44 flex items-center mx-2 rounded-lg border-2 border-solid border-gray-300 focus:border-blue-600"
      />
      <span className="mr-2 flex items-center font-bold">Đến</span>
      <input
        type="date"
        onChange={(event) => setDateTo(event.target.value)}
        value={dateTo}
        className="p-2.5 w-44 flex items-center mx-2 rounded-lg border-2 border-solid border-gray-300 focus:border-blue-600"
      />
      <button onClick={() => {
        if (checkDate(dateFrom, dateTo)) {
          dispatch(filtersAction.updateDateCategory(dateFrom, dateTo));
          dispatch(
            categorysAction.loadListCategoryConnectRequest(
              `${table}Filters`,
              query,
              true,
              {
                filters: filters.choose,
                sorter: filters.sorter,
                search: filters.keyword,
                mainFilters: filters
              },
              headers
            )
          );
        }
        else {
          alert("Ngày không hợp lệ !")
        }
      }} className="px-4 py-3 rounded-lg bg-organce text-white font-semibold">
        Lọc theo ngày
      </button>
    </>
  );
}

export default DateComponent;
