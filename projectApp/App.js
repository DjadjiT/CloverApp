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
    SafeAreaView,
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
import CommunityDetailsScreen from './src/container/communityDetailsScreen';
import AccountScreen from './src/container/accountScreen';
import ShoppingCartScreen from './src/container/shoppingCartScreen';
import QrCodeReaderScreen from './src/container/qrCodeReaderScreen';

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
        let drawerOpen = false;
        return (
            <SafeAreaView style={{flex: 1}}>
                <StatusBar animated backgroundColor="#00B987"/>
                <View
                    key="header"
                    style={{
                        alignSelf: 'stretch',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                    <View
                        key="header"
                        style={{
                            alignItems: 'flex-start',
                            flexDirection: 'row'
                        }}>
                        <TouchableOpacity
                            onPress={() => {
                                drawerOpen ? Actions.drawerClose() : Actions.drawerOpen();
                                drawerOpen = !drawerOpen;
                            }}
                            hitSlop={{top: 40, bottom: 40, left: 50, right: 50}}
                            style={{alignSelf: 'flex-start'}}>
                            <Image
                                source={require('./assets/burger.png')}
                                resizeMode="contain"
                                style={{height: 30, width: 30}}
                            />
                        </TouchableOpacity>
                    </View>
                    <View
                        key="header"
                        style={{
                            alignItems: 'center',
                            flexDirection: 'row'
                        }}>
                        <Image
                            source={require('./assets/burger.png')}
                            resizeMode="contain"
                            style={{height: 30, width: 30}}
                        />
                    </View>
                    <View
                        key="header"
                        style={{
                            alignItems: 'flex-end',
                            flexDirection: 'row'
                        }}>
                        <TouchableOpacity
                            onPress={() => Actions.push('AccountScreen')}
                            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                            style={{alignSelf: 'flex-end'}}>
                            <Image
                                source={require('./assets/burger.png')}
                                resizeMode="contain"
                                style={{height: 30, width: 30}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => Actions.push('QrCodeReaderScreen')}
                            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                            style={{alignSelf: 'flex-end'}}>
                            <Image
                                source={require('./assets/burger.png')}
                                resizeMode="contain"
                                style={{height: 30, width: 30}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => Actions.push('ShoppingCartScreen')}
                            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                            style={{alignSelf: 'flex-end'}}>
                            <Image
                                source={require('./assets/burger.png')}
                                resizeMode="contain"
                                style={{height: 30, width: 30}}
                            />
                        </TouchableOpacity>
                    </View>
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
                            <Scene
                                initial={false}
                                key="CommunityDetailsScreen"
                                component={CommunityDetailsScreen}
                                title="CommunityDetailsScreen"
                                hideNavBar
                            />
                            <Scene
                                initial={false}
                                key="AccountScreen"
                                component={AccountScreen}
                                title="AccountScreen"
                                hideNavBar
                            />
                            <Scene
                                initial={false}
                                key="ShoppingCartScreen"
                                component={ShoppingCartScreen}
                                title="ShoppingCartScreen"
                                hideNavBar
                            />
                            <Scene
                                initial={false}
                                key="QrCodeReaderScreen"
                                component={QrCodeReaderScreen}
                                title="QrCodeReaderScreen"
                                hideNavBar
                            />
                        </Scene>
                    </Drawer>
                </Router>
            </SafeAreaView>
        );
    }
}
