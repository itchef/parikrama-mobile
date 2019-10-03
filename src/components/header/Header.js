import React from "react";
import { Header as ReactHeader, Body, Right, Title } from "native-base";
import styles from "./Header.style";

const Header = () => (
  <ReactHeader style={styles.wrapper}>
    <Body>
      <Title>Parikrama</Title>
    </Body>
    <Right />
  </ReactHeader>
);

export default Header;
