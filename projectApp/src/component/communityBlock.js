/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  ViewPropTypes,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'purple',
    borderWidth: 2,
    justifyContent: 'center',
  },
  text: {
    fontSize: responsiveFontSize(3),
    color: 'white',
    marginVertical: responsiveHeight(5),
  },
  button: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 2,
  },
});

class CommunityBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          height: responsiveHeight(35),
          width: responsiveWidth(80),
          marginVertical: responsiveHeight(3),
          backgroundColor: 'red',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.53,
          shadowRadius: 13.97,
          elevation: 21,
        }}>
        <Text>This is my block</Text>
      </TouchableOpacity>
    );
  }
}

export default CommunityBlock;
