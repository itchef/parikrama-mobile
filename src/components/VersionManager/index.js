import { selectLatestVersion } from "./selectors";
import { fetchLatest } from "./actions";
import { connect } from "react-redux";
import VersionManager from "./VersionManager";

const mapStateToProps = (state, ownProps) => {
  return {
    currentVersion: ownProps.current,
    latestVersion: state.version.latest
  };
};

const mapDispatchToProps = {
  fetchLatest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VersionManager);
