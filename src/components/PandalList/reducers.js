import {
  FETCH_PANDALS,
  FETCH_PANDALS_SUCCESS,
  FETCH_PANDALS_ERROR
} from "./actionTypes";

const initialStore = [];

const reducers = (state = initialStore, action) => {
  switch (action.type) {
    case FETCH_PANDALS:
      return action.payload;
    case FETCH_PANDALS_SUCCESS:
      return action.payload;
    case FETCH_PANDALS_ERROR:
      return state;
    default:
      return state;
  }
};

export default reducers;
