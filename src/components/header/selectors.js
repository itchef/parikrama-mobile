import { createSelector } from "reselect";

const selectHeader = state => state.header;

export const selectQuery = createSelector(
  selectHeader,
  state => state.query
);
