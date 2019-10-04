import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  Header as ReactHeader,
  Body,
  Right,
  Title,
  Left,
  Icon
} from "native-base";
import styles from "./Header.style";
import SearchBar from "../SearchBar/SearchBar";
import { PRIMARY_COLOR_DARK } from "../../assets/styles/color";
import { updateQuery } from "./actions";

class Header extends PureComponent {
  state = {
    isSearchBarOpen: false
  };

  onSearchIconPress = () => {
    this.setState({ isSearchBarOpen: true });
  };

  onSearch = query => {
    const { updateQuery } = this.props;
    updateQuery(query);
  };

  onSearchBarClose = () => this.setState({ isSearchBarOpen: false });

  header = () => (
    <>
      <Body style={styles.logoWrapper}>
        <Title>Parikrama</Title>
      </Body>
      <Right>
        <Icon name="ios-search" style={styles.icon} onPress={this.onSearchIconPress} />
      </Right>
    </>
  );

  render() {
    const { isSearchBarOpen } = this.state;
    const { query } = this.props;

    return (
      <ReactHeader
        style={styles.wrapper}
        searchBar
        rounded
        androidStatusBarColor={PRIMARY_COLOR_DARK}
      >
        {!isSearchBarOpen && this.header()}
        {isSearchBarOpen && (
          <SearchBar
            query={query}
            onClose={this.onSearchBarClose}
            onChange={this.onSearch}
          />
        )}
      </ReactHeader>
    );
  }
}

Header.propTypes = {
  query: PropTypes.string,
  updateQuery: PropTypes.func
};

Header.defaultProps = {
  query: "",
  updateQuery: () => null
};

export default Header;
