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
  mainText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(4),
  },
  button: {
    margin: 30,
    alignItems: 'center',
    backgroundColor: '#383838',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
  },
  promoCode: {
    color: '#000000',
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
  },
});

module.exports = styles;
