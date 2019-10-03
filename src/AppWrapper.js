import React from "react";
import { Container } from "native-base";

import Header from "./components/header";

const AppWrapper = () => (
  <React.Fragment>
    <Container>
      <Header />
    </Container>
  </React.Fragment>
);

export default AppWrapper;
