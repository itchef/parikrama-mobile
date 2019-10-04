import { combineReducers } from "redux";
import pandals from "../components/PandalList/reducers";
import header from "../components/header/reducers";
import version from "../components/VersionManager/reducers";

export default combineReducers({
  pandals,
  header,
  version
});
