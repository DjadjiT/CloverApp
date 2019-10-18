import {StyleSheet, Platform, Dimensions} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const sharedStyles = StyleSheet.create({
  mainView: {
    flexDirection: 'column',
    backgroundColor: 'white',
    flex: 1,
  },
});

module.exports = sharedStyles;
