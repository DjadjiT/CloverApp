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

import Carousel from 'react-native-snap-carousel';

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

class CollectionCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {data, renderItem} = this.props;
    return (
      <Carousel
        ref={c => {
          this._carousel = c;
        }}
        layout={'default'}
        data={data}
        renderItem={renderItem}
        sliderWidth={responsiveWidth(100)}
        contentContainerStyle={{
          justifyContent: 'center',
        }}
        containerCustomStyle={{
          //marginHorizontal: responsiveWidth(-4),
          flexGrow: 0,
          //paddingVertical: 5,
        }}
        useScrollView={true}
        itemWidth={responsiveWidth(84)}
      />
    );
  }
}

export default CollectionCarousel;
