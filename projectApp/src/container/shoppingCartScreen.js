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

import * as loginActions from '../actions/loginActions';
import * as ApiCall from '../actions/apiCall';

import styles from '../styles/shoppingCartScreenStyle';
import commonStyles from '../sharedStyles/commonStyle';

type Props = {};

export default class ShoppingCartScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {cartList: []};

    loginActions
      .fetchCartList()
      .then(res => {
        this.setState({cartList: res});
      })
      .catch(error => console.log(error));
  }

  removeItem(index) {
    let {cartList} = this.state;
    cartList.splice(index, 1);
    this.setState({cartList});
    ApiCall.removeFromCartList(cartList);
  }

  render() {
    let {cartList} = this.state;

    console.log(cartList);

    return (
      <View style={commonStyles.mainView}>
        {cartList.map(index => {
          return (
            <View
              style={[
                styles.view,
                {flexDirection: 'row', justifyContent: 'space-around'},
              ]}>
              <Image
                source={require('../../assets/watches/lux7.jpg')}
                resizeMode={'contain'}
                style={{
                  height: responsiveHeight(10),
                  width: responsiveWidth(10),
                }}
              />
              <Text style={[styles.text, {width: responsiveWidth(35)}]}>
                BLUE SAPHIRE LADIES WATCH
              </Text>
              <Text style={styles.text}>259 €</Text>
              <Text style={styles.text}>1</Text>
              <TouchableOpacity
                onPress={() => {
                  this.removeItem(index);
                }}
                hitSlop={{top: 40, bottom: 40, left: 50, right: 50}}
                style={{alignSelf: 'center', marginHorizontal: 2}}>
                <Text style={styles.text}>Supprimer</Text>
              </TouchableOpacity>
            </View>
          );
        })}
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 0,
            backgroundColor: 'green',
            width: responsiveWidth(100),
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: responsiveFontSize(2.5),
              color: 'white',
              marginVertical: responsiveHeight(2),
            }}>
            Passer la commande
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
