import { createSelector } from "reselect";

const selectVersion = state => state.version;

export const selectLatestVersion = createSelector(
  selectVersion,
  state => state.latest
);
