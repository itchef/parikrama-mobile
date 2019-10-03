import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Content, List } from "native-base";

import PandalItem from "./PandalItem/PandalItem";

const renderPandal = pandal => <PandalItem key={pandal.code} {...pandal} />;

class PandalList extends PureComponent {
  componentDidMount() {
    const { fetchPandals } = this.props;
    fetchPandals();
  }

  render() {
    const { pandals } = this.props;
    return (
      <Content>
        <List>{pandals.map(renderPandal)}</List>
      </Content>
    );
  }
}

PandalItem.propTypes = {
  pandals: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      zone: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.string,
      location: PropTypes.string.isRequired
    })
  ),
  fetchPandals: PropTypes.func
};

PandalItem.defaultProps = {
  pandals: [],
  fetchPandals: () => null
};

export default PandalList;
