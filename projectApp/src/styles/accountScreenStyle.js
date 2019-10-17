import {StyleSheet, Platform, Dimensions} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'column',
    backgroundColor: 'white',
    flex: 1,
  },
  view: {
    width: responsiveWidth(100),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderBottomWidth: 1
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.5)
  },
  userText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(3)
  }
});

module.exports = styles;
