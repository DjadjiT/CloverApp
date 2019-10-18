import {StyleSheet, Platform, Dimensions} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  topImageContainer: {alignItems: 'center', justifyContent: 'center'},
  topImage: {
    height: responsiveHeight(30),
    width: responsiveWidth(100),
    position: 'absolute',
    top: 0,
  },
  mainText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(4),
  },
  topAppLogo: {
    height: responsiveHeight(8),
    width: responsiveWidth(12),
    tintColor: 'white',
    marginTop: 10,
  },
  topBrandLogo: {
    height: responsiveHeight(10),
    width: responsiveWidth(30),
    tintColor: 'white',
    marginTop: 15,
  },
  customizeButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  customizeButton: {
    margin: 30,
    alignItems: 'center',
    backgroundColor: '#383838',
    padding: 10,
    borderRadius: 5,
  },
  customizeButtonText: {
    color: 'white',
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
  },
  eventContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventImage: {height: responsiveHeight(15), width: responsiveWidth(100)},
  eventTextContainer: {position: 'absolute', alignItems: 'center'},
  eventText: {color: 'white', fontSize: responsiveFontSize(3)},
});

module.exports = styles;
