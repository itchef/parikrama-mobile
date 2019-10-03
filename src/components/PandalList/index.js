import { connect } from "react-redux";

import PandalList from "./PandalList";
import { fetchPandals } from "./actions";

const mapStateToProps = (state, ownProps) => ({
  pandals: state.pandals
});

const mapDispatchToProps = {
  fetchPandals
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PandalList);
