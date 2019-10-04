import { FETCH_LATEST_VERSION } from "./actionTypes";

const initialState = {
  latest: null
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LATEST_VERSION:
      return { ...state, latest: action.payload };
    default:
      return { ...state };
  }
};

export default reducers;
