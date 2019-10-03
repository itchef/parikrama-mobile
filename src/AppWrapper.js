import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import Header from "./components/header";
import PandalList from "./components/PandalList";
import * as config from "./config/parikrama.config";
import styles from "./AppWrapper.style";
import rootReducer from "./store";

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

const AppWrapper = () => (
  <Provider store={store}>
    <StatusBar styles={styles.statusBar} translucent barStyle="default" />
    <Header />
    <PandalList />
  </Provider>
);

export default AppWrapper;
