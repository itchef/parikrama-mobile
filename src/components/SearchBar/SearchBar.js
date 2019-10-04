import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Item, Icon, Input } from "native-base";

import styles from "./SearchBar.style";

class SearchBar extends PureComponent {
  render() {
    const { query, onChange, onClose } = this.props;
    return (
      <Item>
        <Icon name="ios-search" />
        <Input
          placeholder="Search Pandals"
          style={styles.wrapper}
          clearButtonMode="while-editing"
          returnKeyType="search"
          keyboardType="web-search"
          onChangeText={query => onChange(query)}
        />
        <Icon type="MaterialIcons" name="close" onPress={onClose} />
      </Item>
    );
  }
}

SearchBar.propTypes = {
  query: PropTypes.string,
  onClose: PropTypes.func,
  onChange: PropTypes.func
};

SearchBar.defaultProps = {
  query: "",
  onClose: () => null,
  onChange: () => null
};

export default SearchBar;
