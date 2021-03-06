import {StyleSheet, Platform, Dimensions} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  view: {
    width: responsiveWidth(100),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  image: {
    height: responsiveHeight(17),
    width: responsiveWidth(100),
    position: 'absolute',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.5),
  },
  userText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(3),
  },
});

module.exports = styles;
