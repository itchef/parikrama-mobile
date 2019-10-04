import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Content, List } from "native-base";

import PandalItem from "./PandalItem/PandalItem";
import { filterPandals } from "./effects";

const renderPandal = pandal => <PandalItem key={pandal.code} {...pandal} />;

class PandalList extends PureComponent {
  componentDidMount() {
    const { fetchPandals } = this.props;
    fetchPandals();
  }

  render() {
    const { pandals, query } = this.props;

    const filteredPandals = filterPandals(pandals, query);

    return (
      <Content>
        <List>{filteredPandals.map(renderPandal)}</List>
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
  query: PropTypes.string,
  fetchPandals: PropTypes.func
};

PandalItem.defaultProps = {
  pandals: [],
  query: "",
  fetchPandals: () => null
};

export default PandalList;
