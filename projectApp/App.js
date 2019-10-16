/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, setGlobal} from 'reactn';
import {
  Platform,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  Button,
} from 'react-native';

import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Drawer,
  Modal,
  Stack,
  Lightbox,
} from 'react-native-router-flux';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

//import SplashScreen from "./src/container/splash";

import MainScreen from './src/container/mainScreen';
import CommunityScreen from './src/container/communityScreen';
import CustomizerScreen from './src/container/customizerScreen';

import DrawerContent from './src/component/drawerContent';

type Props = {};

class BurgerIcon extends Component {
  render() {
    return (
      <Image
        resizeMode="contain"
        style={{height: 25, width: 30}}
        source={{uri: './assets/burger.png'}}
      />
    );
  }
}

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          animated
          barStyle="light-content"
          backgroundColor="#00B987"
        />
        <View
          key="header"
          flexDirection="row"
          style={{alignSelf: 'stretch', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => Actions.drawerOpen()}
            hitSlop={{top: 40, bottom: 40, left: 50, right: 50}}>
            <Image
              source={require('./assets/burger.png')}
              resizeMode="contain"
              style={{height: 30, width: 30, alignSelf: 'flex-start'}}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: responsiveFontSize(4),
              color: 'blue',
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            CloverApp
          </Text>
        </View>
        <Router>
          <Drawer
            hideNavBar
            key="drawer"
            onExit={() => {
              console.log('Drawer closed');
            }}
            onEnter={() => {
              console.log('Drawer opened');
            }}
            contentComponent={DrawerContent}
            drawerImage={BurgerIcon}>
            <Scene key="root">
              <Scene
                initial={true}
                key="MainScreen"
                component={MainScreen}
                title="MainScreen"
                hideNavBar
              />
              <Scene
                initial={false}
                key="CommunityScreen"
                component={CommunityScreen}
                title="CommunityScreen"
                hideNavBar
              />
              <Scene
                initial={false}
                key="CustomizerScreen"
                component={CustomizerScreen}
                title="CustomizerScreen"
                hideNavBar
              />
            </Scene>
          </Drawer>
        </Router>
      </View>
    );
  }
}
