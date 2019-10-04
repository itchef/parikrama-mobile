import { createAction } from "../../utils";
import { FETCH_LATEST_VERSION } from "./actionTypes";
import { fetchLatest as fetchLatestVersion } from "./effects";

export const fetchLatest = () => async dispatch => {
  fetchLatestVersion(versions =>
    dispatch(createAction(FETCH_LATEST_VERSION)(versions))
  );
};
