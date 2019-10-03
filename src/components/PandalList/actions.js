import { createAction } from "../../utils";
import {
  FETCH_PANDALS,
  FETCH_PANDALS_SUCCESS,
  FETCH_PANDALS_ERROR
} from "./actionTypes";
import { fetchPandalList } from "./effects";

export const fetchPandals = () => async dispatch => {
  fetchPandalList(pandals => dispatch(createAction(FETCH_PANDALS)(pandals)));
};
export const fetchPandalSuccess = createAction(FETCH_PANDALS_SUCCESS);
export const fetchPandalError = createAction(FETCH_PANDALS_ERROR);
