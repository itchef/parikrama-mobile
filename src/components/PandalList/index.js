import { connect } from "react-redux";

import PandalList from "./PandalList";
import { fetchPandals } from "./actions";
import { selectPandals } from "./selectors";
import { selectQuery } from "../header/selectors";

const mapStateToProps = (state, ownProps) => {
  return { pandals: selectPandals(state), query: selectQuery(state) };
};

const mapDispatchToProps = {
  fetchPandals
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PandalList);
