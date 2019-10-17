import {StyleSheet, Platform, Dimensions} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  scrollView: {marginBottom: responsiveHeight(7)},
  watchDetails: {
    alignSelf: 'center',
    //height: responsiveHeight(50),
    width: responsiveWidth(90),
    marginVertical: responsiveHeight(3),
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 8,
    elevation: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  watchImage: {flex: 1, height: responsiveHeight(40)},
  watchDescription: {flex: 2, justifyContent: 'flex-end'},
  title: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(3),
    marginVertical: responsiveHeight(5),
    width: responsiveWidth(80),
  },
  description: {
    width: responsiveWidth(80),
    marginHorizontal: responsiveWidth(2),
    marginBottom: responsiveHeight(5),
  },
  textField: {width: responsiveWidth(90), alignSelf: 'center'},
  sendTouchable: {
    alignSelf: 'flex-end',
    marginRight: responsiveWidth(5),
    backgroundColor: 'turquoise',
    borderRadius: 10,
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(3),
  },
  sendText: {
    color: 'white',
    fontSize: responsiveFontSize(2.3),
    fontWeight: 'bold',
  },
  commentaryListContainer: {
    backgroundColor: '#EEEEEE',
    elevation: 10,
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: responsiveHeight(3),
    paddingVertical: responsiveHeight(1),
  },
  commentaryText: {
    marginLeft: responsiveWidth(5),
    fontSize: responsiveFontSize(2.3),
    fontWeight: '500',
  },
  addToCartTouchable: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'green',
    width: responsiveWidth(100),
  },
  addToCartText: {
    color: 'white',
    fontSize: responsiveFontSize(4),
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

module.exports = styles;
