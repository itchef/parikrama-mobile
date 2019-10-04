import { StyleSheet } from "react-native";
import {
  PRIMARY_COLOR,
  PRIMARY_THEME_ICON_COLOR
} from "../../assets/styles/color";

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 50,
    paddingBottom: 30,
    backgroundColor: PRIMARY_COLOR
  },
  logoWrapper: {
    paddingLeft: 15
  },
  icon: {
    color: PRIMARY_THEME_ICON_COLOR
  }
});

export default styles;
