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
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import styles from '../styles/mainScreenStyle';

type Props = {};

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

export default class CommunityDetailsScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const watch = {
      title: 'Incroyable montre de luxe super stylée par la team 7',
      description:
        "Ceci est une incroyable montre de luxe, certifiée Team 7 la meilleure equipe de l'univers et je sais pas quoi dire d'autre mais c'est pas grave",
      price: '2500 €',
    };

    return (
      <View style={styles.mainView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
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
            }}>
            <Image
              source={require('../../assets/watches/lux7.jpg')}
              resizeMode="contain"
              style={{flex: 1, height: responsiveHeight(40)}}
            />
            <View style={{flex: 1.5}}>
              <View style={{flex: 2, justifyContent: 'flex-end'}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: responsiveFontSize(3),
                    marginVertical: responsiveHeight(5),
                    width: responsiveWidth(80),
                  }}>
                  {watch.title}
                </Text>
                <Text
                  numberOfLines={4}
                  ellipsizeMode="tail"
                  style={{
                    width: responsiveWidth(80),
                    marginHorizontal: responsiveWidth(2),
                    marginBottom: responsiveHeight(5),
                  }}>
                  {watch.description}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
