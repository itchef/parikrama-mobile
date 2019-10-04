import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Content, List } from "native-base";

import PandalItem from "./PandalItem/PandalItem";
import PandalLoader from "./PandalItemLoader";
import { filterPandals } from "./effects";
import PandalItemLoader from "./PandalItemLoader/PandalItemLoader";

const renderPandal = pandal => <PandalItem key={pandal.code} {...pandal} />;

class PandalList extends PureComponent {
  state = {
    isLoading: true
  };
  componentDidMount() {
    const { fetchPandals } = this.props;
    fetchPandals();
  }

  componentDidUpdate(prevProps) {
    const { pandals } = this.props;
    if (pandals.length !== 0) this.setState({ isLoading: false });
  }

  render() {
    const { pandals, query } = this.props;
    const { isLoading } = this.state;

    const filteredPandals = filterPandals(pandals, query);
    if (isLoading) {
      return <PandalLoader count={7} />;
    }

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
