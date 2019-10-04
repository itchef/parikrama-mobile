import React from "react";
import {
  Placeholder,
  Shine,
  PlaceholderMedia,
  PlaceholderLine
} from "rn-placeholder";

import styles from "./PandalItemLoader.style";

const PandalItemLoader = () => {
  return (
    <Placeholder Animation={Shine} Left={PlaceholderMedia}>
      <PlaceholderLine style={styles.title} />
      <PlaceholderLine />
      <PlaceholderLine width={40} />
    </Placeholder>
  );
};

export default PandalItemLoader;
