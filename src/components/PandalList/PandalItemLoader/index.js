import React from "react";
import { PropTypes } from "prop-types";
import PandalItemLoader from "./PandalItemLoader";
import { List, ListItem } from "native-base";

const PandalLoader = ({ count }) => {
  const wrapper = [];
  for (let counter = 0; counter < count; counter++) {
    wrapper.push(
      <ListItem key={`loader-${counter}`}>
        <PandalItemLoader />
      </ListItem>
    );
  }
  return <List>{wrapper}</List>;
};

PandalLoader.propTypes = {
  count: PropTypes.number
};

PandalLoader.defaultProps = {
  count: 1
};

export default PandalLoader;
