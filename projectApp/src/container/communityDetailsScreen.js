/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, setGlobal} from 'reactn';
import {
  Platform,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import styles from '../styles/mainScreenStyle';

type Props = {};

export default class CommunityDetailsScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Text>This is the details of the item n°{this.props.item_details}</Text>
      </View>
    );
  }
}
