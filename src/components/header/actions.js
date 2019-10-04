import { createAction } from "../../utils";
import { UPDATE_QUERY } from "./actionTypes";

export const updateQuery = query => async dispatch => {
  dispatch(createAction(UPDATE_QUERY)(query));
};
