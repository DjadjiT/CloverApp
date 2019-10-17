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
  ScrollView
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import CommunityBlock from '../component/communityBlock';
import CollectionCarousel from '../component/collectionCarousel';

import styles from '../styles/mainScreenStyle';

type Props = {};

let array = [{name: 'object 1'}, {name: 'object 2'}, {name: 'object 3'}];

export default class HomeScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderItem = ({item, index}) => {
    return <CommunityBlock title={'BLUE SAPHIRE LADIES WATCH'}
                           text={'Smooth stretch fabric, contrast binding, round neckline, cap sleeves, ruched side detail.\n' +
                           'Take your shoe style to new heights with this alluring peep toe court shoe. Features a slim high heel and ' +
                           'metallic detailing along the platform. Team with a high waisted pencil skirt and midi top for after dark ' +
                           'glam.'}/>;
  };

  render() {
    return (
      <ScrollView style={styles.mainView}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('../../assets/bandeau_dark.png')}
            style={{height: 180, width: responsiveWidth(100), position: 'absolute', top: 0}}
          />
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/logoclover.png')}
              resizeMode={'contain'}
              style={{height: responsiveHeight(8), width: responsiveWidth(12), tintColor: 'white', marginTop: 10}}
            />
            <Text style={[styles.mainText, {marginTop: 20}]}>CloverApp</Text>
          </View>
          <Text style={styles.mainText}>by</Text>
          <Image
            source={require('../../assets/Logo-Augarde-HD.png')}
            resizeMode={'contain'}
            style={{height: responsiveHeight(10), width: responsiveWidth(30), tintColor: 'white', marginTop: 15}}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
          <TouchableOpacity onPress={() => Actions.push('CustomizerScreen')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Créer une montre</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View key="carousel">
          <CollectionCarousel
            data={array}
            title="Nouvelle Collection"
            renderItem={this.renderItem}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Image
            source={require('../../assets/bandeau.png')}
            style={{height: 80, width: responsiveWidth(100)}}
          />
        </View>
      </ScrollView>
    );
  }
}
