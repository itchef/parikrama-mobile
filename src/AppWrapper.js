import React from "react";
import { StatusBar } from "react-native";

import Header from "./components/header";
import PandalList from "./components/PandalList/PandalList";
import * as config from "./config/parikrama.config";
import styles from "./AppWrapper.style";

const AppWrapper = () => (
  <React.Fragment>
    <StatusBar styles={styles.statusBar} translucent barStyle="default" />
    <Header />
    <PandalList config={config} />
  </React.Fragment>
);

export default AppWrapper;
