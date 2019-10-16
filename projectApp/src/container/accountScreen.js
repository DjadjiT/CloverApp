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
    Dimensions,
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import Carousel from 'react-native-snap-carousel';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';

import styles from '../styles/mainScreenStyle';

type Props = {};

export default class AcccountScreen extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <View style={styles.mainView}>
                <Text style={styles.mainText}>AccountScreen</Text>
            </View>
        );
    }
}