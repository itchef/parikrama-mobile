import React from "react";
import {
  Header as ReactHeader,
  Container,
  Body,
  Right,
  Title
} from "native-base";
import styles from "./Header.style";

const Header = () => (
  <Container>
    <ReactHeader style={styles.wrapper}>
      <Body>
        <Title>Parikrama</Title>
      </Body>
      <Right />
    </ReactHeader>
  </Container>
);

export default Header;
