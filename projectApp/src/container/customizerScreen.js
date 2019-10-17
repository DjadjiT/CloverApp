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

import * as ApiCall from '../actions/apiCall';

import styles from '../styles/mainScreenStyle';

type Props = {};

const componentsArray = [
  {title: 'boitier', image: require('../../assets/watch_case.png')},
  {title: 'cadran', image: require('../../assets/watch_clock_dial.png')},
  {title: 'aiguilles', image: require('../../assets/watch_hand.png')},
  {title: 'bracelet', image: require('../../assets/watchband.png')},
];

const componentDetailsArray = {
  boitier: [
    {
      id: 1,
      title: 'titre 1',
      type: 'boitier',
      image: require('../../assets/watches/boitier_A.png'),
    },
    {
      id: 2,
      title: 'titre 2',
      type: 'boitier',
      image: require('../../assets/watches/boitier_B.png'),
    },
    {
      id: 3,
      title: 'titre 3',
      type: 'boitier',
      image: require('../../assets/watches/boitier_C.png'),
    },
  ],
  cadran: [
    {
      id: 1,
      title: 'titre A',
      type: 'cadran',
      image: require('../../assets/watches/cadre_0.png'),
    },
    {
      id: 2,
      title: 'titre B',
      type: 'cadran',
      image: require('../../assets/watches/cadre_1.png'),
    },
    {
      id: 3,
      title: 'titre C',
      type: 'cadran',
      image: require('../../assets/watches/cadre_2.png'),
    },
    {
      id: 4,
      title: 'titre D',
      type: 'cadran',
      image: require('../../assets/watches/cadre_3.png'),
    },
  ],
  bracelet: [
    {
      id: 1,
      title: 'titre alpha',
      type: 'bracelet',
      image: require('../../assets/watches/bracelet_cuir.png'),
    },
    {
      id: 2,
      title: ' titre omega',
      type: 'bracelet',
      image: require('../../assets/watches/bracelet_cuir_fin_rouge.png'),
    },
  ],
};

export default class CustomizerScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      currentComponent: null,
      itemListView: null,
      watchList: {
        cadran: {
          id: 1,
          source: require('../../assets/watches/cadre_0.png'),
        },
        bracelet: {
          id: 1,
          source: require('../../assets/watches/bracelet_cuir.png'),
        },
        boitier: {
          id: 1,
          source: require('../../assets/watches/boitier_A.png'),
        },
      },
    };
  }

  addList(currentItem) {
    let chosenArray = componentDetailsArray[currentItem.title];

    chosenArray &&
      this.setState({
        itemListView: (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              flex: 1,
            }}>
            {chosenArray.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.7}
                  style={{
                    flex: 1,
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    flexDirection: 'column',
                    paddingHorizontal: responsiveWidth(
                      componentsArray.length >= 5 ? 5 : 12,
                    ),
                  }}
                  onPress={() => {
                    let watchList = this.state.watchList;
                    watchList[currentItem.title].source = item.image;
                    watchList[currentItem.title].id = item.id;
                    this.setState({watchList: watchList});
                  }}>
                  <Image
                    source={item.image}
                    resizeMode="contain"
                    style={{height: 30, width: 30, alignSelf: 'center'}}
                  />
                  <Text style={{flex: 1, alignSelf: 'center'}}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        ),
        currentComponent: currentItem,
      });
  }

  render() {
    let {currentComponent, itemListView, watchList} = this.state;

    return (
      <View style={styles.mainView}>
        <View
          key="actions"
          style={{
            position: 'absolute',
            top: 150,
            right: 0,
            flexDirection: 'column',
            zIndex: 1,
          }}>
          <TouchableOpacity
            style={{
              borderColor: 'lightgrey',
              borderWidth: 1,
            }}
            onPress={() => {
              ApiCall.share(watchList)
                .then(() => {
                  Actions.replace('MainScreen');
                })
                .catch(error => {
                  console.log(error);
                  Actions.replace('MainScreen');
                });
            }}>
            <Image
              source={require('../../assets/share.png')}
              resizeMode="contain"
              style={{
                height: 40,
                width: 40,
                alignSelf: 'center',
                margin: responsiveWidth(2),
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{borderColor: 'lightgrey', borderWidth: 1}}
            onPress={() => {
              ApiCall.share(watchList)
                .then(() => {
                  Actions.replace('MainScreen');
                })
                .catch(error => {
                  console.log(error);
                  Actions.replace('MainScreen');
                });
            }}>
            <Image
              source={require('../../assets/add_to_cart.png')}
              resizeMode="contain"
              style={{
                height: 40,
                width: 40,
                alignSelf: 'center',
                margin: responsiveWidth(2),
              }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={watchList.bracelet.source}
            resizeMode="contain"
            style={{
              height: 650,
              width: 650,
              alignSelf: 'center',
              position: 'absolute',
              top: 15,
            }}
          />
          <Image
            source={watchList.cadran.source}
            resizeMode="contain"
            style={{
              height: 100,
              width: 100,
              alignSelf: 'center',
              position: 'absolute',
              top: 250,
            }}
          />
          <Image
            source={watchList.boitier.source}
            resizeMode="contain"
            style={{
              height: 150,
              width: 150,
              alignSelf: 'center',
              position: 'absolute',
              top: 230,
            }}
          />
        </View>
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
            {componentsArray.map((item, index) => {
              return (
                <TouchableOpacity
                  key={item.title}
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    flexDirection: 'column',
                    backgroundColor:
                      item === currentComponent ? 'white' : '#F6F6F6',
                  }}
                  onPress={() => this.addList(item)}>
                  <Image
                    source={item.image}
                    resizeMode="contain"
                    style={{height: 30, width: 30, alignSelf: 'center'}}
                  />
                  <Text style={{flex: 1, alignSelf: 'center'}}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    );
  }
}
