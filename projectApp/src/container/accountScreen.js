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

import styles from '../styles/accountScreenStyle';

type Props = {};

export default class AccountScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.view}>
          <Image
            source={require('../../assets/bandeau_user.jpg')}
            style={{height: responsiveHeight(17), width: responsiveWidth(100), position: 'absolute'}}
            />
          <Text style={styles.userText}>Bonjour, Mégane</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.text}>Mes commandes</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.text}>Mes informations</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.text}>Changer mon mot de passe</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.text}>Mode de paiement</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.text}>Déconnexion</Text>
        </View>
      </View>
    );
  }
}
