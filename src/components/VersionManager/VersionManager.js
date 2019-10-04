import React, { Component } from "react";
import PropTypes from "prop-types";
import { fetchLatest } from "./effects";
import { Toast } from "native-base";
import { Linking } from "react-native";

import styles from "./VersionManager.style";

class VersionManager extends Component {
  componentDidMount() {
    const { fetchLatest } = this.props;

    const ONE_HOUR = 1000;

    setInterval(() => fetchLatest(), ONE_HOUR);
  }

  onCloseNotification = () => {
    const { latestVersion } = this.props;
    Linking.openURL(latestVersion.link);
  };

  areVersionsDifferent = () => {
    const { latestVersion, currentVersion } = this.props;
    if (latestVersion) {
      return latestVersion.version !== currentVersion;
    }
    return false;
  };

  showToast = () =>
    Toast.show({
      text: "New update available",
      buttonText: "Download",
      duration: 15000,
      type: "warning",
      style: styles.toastWrapper,
      onClose: this.onCloseNotification
    });

  render() {
    if (this.areVersionsDifferent()) {
      this.showToast();
    }

    return <></>;
  }
}

VersionManager.propTypes = {
  currentVersion: PropTypes.string.isRequired,
  latestVersion: PropTypes.shape({
    version: PropTypes.string,
    link: PropTypes.string
  }),
  fetchLatest: PropTypes.func
};

VersionManager.defaultProps = {
  latestVersion: null,
  fetchLatest: () => null
};

export default VersionManager;
