import React from "react";
import PropTypes from "prop-types";
import { Content, List } from "native-base";

import PandalItem from "./PandalItem/PandalItem";

const renderPandal = pandal => <PandalItem key={pandal.name} {...pandal} />;

const PandalList = ({ config }) => (
  <Content>
    <List>{config[0].pandals.map(renderPandal)}</List>
  </Content>
);

PandalItem.propTypes = {
  config: PropTypes.arrayOf(
    PropTypes.shape({
      zone: PropTypes.string.isRequired,
      pandals: PropTypes.arrayOf({
        name: PropTypes.string.isRequired,
        address: PropTypes.string,
        location: PropTypes.string.isRequired
      })
    })
  )
};

PandalItem.defaultProps = {
  config: []
};

export default PandalList;
