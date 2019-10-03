import React, { Component } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Container } from "native-base";
import { initializeApp } from "firebase";
import { YellowBox } from "react-native";

import AppWrapper from "./src/AppWrapper";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
    YellowBox.ignoreWarnings(["Setting a timer"]);
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
    console.ignoredYellowBox = ["Setting a timer"];
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <AppWrapper />
      </Container>
    );
  }
}

export default App;
