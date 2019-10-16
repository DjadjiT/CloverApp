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

import CommunityBlock from '../component/communityBlock';

import styles from '../styles/mainScreenStyle';

type Props = {};

const array = [1, 2, 3];

export default class CommunityScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.mainView}>
        <ScrollView
          style={{marginTop: responsiveHeight(5)}}
          showsVerticalScrollIndicator={false}>
          {array.map(index => {
            return <CommunityBlock />;
          })}
        </ScrollView>
      </View>
    );
  }
}
