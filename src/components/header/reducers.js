import { UPDATE_QUERY } from "./actionTypes";

const initialState = {
  query: ""
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUERY:
      return { ...state, query: action.payload };
    default:
      return { ...state };
  }
};

export default reducers;
