import {StyleSheet, Platform, Dimensions} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  sideActionsContainer: {
    position: 'absolute',
    top: 150,
    right: 0,
    flexDirection: 'column',
    zIndex: 1,
  },
  sideActionsTouchable: {
    borderColor: 'lightgrey',
    borderWidth: 1,
  },
  sideActionsImage: {
    height: 40,
    width: 40,
    alignSelf: 'center',
    margin: responsiveWidth(2),
  },
  braceletImage: {
    height: 650,
    width: 650,
    alignSelf: 'center',
    position: 'absolute',
    top: 15,
  },
  cadranImage: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    position: 'absolute',
    top: 250,
  },
  boitierImage: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    position: 'absolute',
    top: 230,
  },
  bottomContainer: {
    flexDirection: 'column',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    alignSelf: 'stretch',
  },
  bottomFirstActionsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  bottomFirstActionsTouchable: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'lightgrey',
    flexDirection: 'column',
  },
  bottomFirstActionsImage: {height: 30, width: 30, alignSelf: 'center'},
  bottomFirstActionsText: {flex: 1, alignSelf: 'center'},

  bottomSecondActionsTouchable: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgrey',
    flexDirection: 'column',
  },
});

module.exports = styles;
