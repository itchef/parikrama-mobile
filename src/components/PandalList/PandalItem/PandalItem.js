import React from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  Left,
  Body,
  Right,
  Button,
  Text,
  Thumbnail
} from "native-base";
import { Linking } from "react-native";
import styles from "./PandalItem.style";

const PandalItem = ({ name, address, location }) => {
  return (
    <ListItem thumbnail>
      <Left style={styles.thumbnail}>
        <Thumbnail
          square
          source={{
            uri:
              "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F9%2F9c%2FDurga_Puja_celebration.jpg&f=1&nofb=1"
          }}
        />
      </Left>
      <Body>
        <Text>{name}</Text>
        <Text note numberOfLines={3}>
          {address}
        </Text>
      </Body>
      <Right>
        <Button transparent onPress={() => Linking.openURL(location)}>
          <Text>Map</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

PandalItem.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string,
  location: PropTypes.string.isRequired
};

PandalItem.defaultProps = {
  address: ""
};

export default PandalItem;
