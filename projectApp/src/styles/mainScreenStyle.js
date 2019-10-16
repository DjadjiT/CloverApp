import {StyleSheet, Platform, Dimensions} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
    flex: 1,
  },
  mainText: {
    color: 'blue',
  },
  button : {
    backgroundColor: '#383838',
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

module.exports = styles;
