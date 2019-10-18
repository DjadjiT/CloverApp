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
  promoCode: {
    color: '#000000',
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
  },
  scrollViewStyle : {
    marginTop: responsiveHeight(5),
    flex : 1,
    alignItems:'center'
  },
  communityCardStyle: {
    padding: 10,
  },
});

module.exports = styles;
