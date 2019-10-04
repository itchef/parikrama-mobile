import { connect } from "react-redux";
import Header from "./Header";
import { updateQuery } from "./actions";

const mapStateToProps = state => ({
  query: state.header.query
});

const mapDispatchToProps = {
  updateQuery
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
