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
  ScrollView,
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

const componentsArray = ['montre', 'bracelet', 'aiguilles'];

export default class CustomizerScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      currentComponent: null,
      componentsArray2: [],
      itemListView: null,
    };
  }

  addList(item) {
    this.setState({
      itemListView: (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            flex: 1,
          }}>
          {componentsArray.map((item, index) => {
            return (
              <TouchableOpacity
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  flexDirection: 'column',
                  paddingHorizontal: responsiveWidth(
                    componentsArray.length >= 5 ? 5 : 12,
                  ),
                }}>
                <Image
                  source={require('../../assets/burger.png')}
                  resizeMode="contain"
                  style={{height: 30, width: 30, alignSelf: 'center'}}
                />
                <Text style={{flex: 1, alignSelf: 'center'}}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      ),
      currentComponent: item,
    });
  }

  render() {
    let {currentComponent, componentsArray2, itemListView} = this.state;

    return (
      <View style={styles.mainView}>
        <Text style={styles.mainText}>CustomizerScreen</Text>

        <View
          style={{
            flexDirection: 'column',
            position: 'absolute',
            width: '100%',
            bottom: 0,
            alignSelf: 'stretch',
          }}>
          {itemListView}
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'center',
            }}>
            {componentsArray.map((item, index) => (
              <TouchableOpacity
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  flexDirection: 'column',
                }}
                onPress={() => this.addList(item)}>
                <Image
                  source={require('../../assets/burger.png')}
                  resizeMode="contain"
                  style={{height: 30, width: 30, alignSelf: 'center'}}
                />
                <Text style={{flex: 1, alignSelf: 'center'}}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    );
  }
}
