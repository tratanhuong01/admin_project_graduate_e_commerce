import * as Types from "../constants/ActionTypes";

let date = new Date();
const monthTo = date.getUTCMonth() + 1; //months from 1-12
const dayTo = date.getUTCDate();
const yearTo = date.getUTCFullYear();
date.setMonth(date.getMonth() - 6);
const monthFrom = date.getUTCMonth() + 1; //months from 1-12
const dayFrom = date.getUTCDate();
const yearFrom = date.getUTCFullYear();

const initialState = {
  choose: [],
  sorter: null,
  search: "",
  dateFrom : `${yearFrom}-${monthFrom < 10 ? `0${monthFrom}` : monthFrom}-${dayFrom < 10 ? `0${dayFrom}` : dayFrom}`,
  dateTo : `${yearTo}-${monthTo < 10 ? `0${monthTo}` : monthTo }-${dayTo < 10 ? `0${dayTo}` : dayTo}`,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.UPDATE_FILTER_CATEGORY:
      state.choose = action.data;
      return { ...state };
    case Types.UPDATE_SORTER_CATEGORY:
      state.sorter = action.sorter;
      return { ...state };
    case Types.UPDATE_SEARCH_CATEGORY:
      state.search = action.keyword;
      return { ...state };
    case Types.UPDATE_DATE_CATEGORY :
      state.dateTo = action.dateTo;
      state.dateFrom = action.dateFrom;
      return {...state};
    case Types.REMOVE_ALL_FILTER_SORTER_SEARCH:
      state.choose = [];
      state.search = "";
      state.sorter = null;
      state.dateFrom = `${yearFrom}-${monthFrom < 10 ? `0${monthFrom}` : monthFrom}-${dayFrom < 10 ? `0${dayFrom}` : dayFrom}`;
      state.dateTo = `${yearTo}-${monthTo < 10 ? `0${monthTo}` : monthTo }-${dayTo < 10 ? `0${dayTo}` : dayTo}`;
      return { ...state };
    default:
      return state;
  }
};
export default myReducer;
