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

import CollectionCarousel from '../component/collectionCarousel';
import CommunityBlock from '../component/communityBlock';

import styles from '../styles/mainScreenStyle';
import MainScreenBlock from "../component/mainScreenBlock";

type Props = {};

const array = ["La collection d'hiver", 'Chic et choc', 'Collection Team 7'];

export default class CollectionScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderItem = ({item, index}) => {
    return <MainScreenBlock
      source={require('../../assets/watches/lux7.jpg')}
      title={'BLUE SAPHIRE LADIES WATCH'}
      text={'Smooth stretch fabric, contrast binding, round neckline, cap sleeves, ruched side detail.\n' +
      'Take your shoe style to new heights with this alluring peep toe court shoe. Features a slim high heel and ' +
      'metallic detailing along the platform. Team with a high waisted pencil skirt and midi top for after dark ' +
      'glam.'}
    />;
  };

  render() {
    return (
      <View style={styles.mainView}>
        <ScrollView
          style={{marginTop: responsiveHeight(5)}}
          showsVerticalScrollIndicator={false}>
          {array.map((item, index) => {
            return (
              <View key={'carousel' + index}>
                <CollectionCarousel
                  data={array}
                  title={item}
                  renderItem={this.renderItem}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
