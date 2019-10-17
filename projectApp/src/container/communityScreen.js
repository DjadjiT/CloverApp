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

import CommunityBlock from '../component/communityBlock';

import styles from '../styles/mainScreenStyle';

type Props = {};

const array = [1, 2, 3];

const card_info_json = {
    "source":'../../assets/watches/lux7.jpg',
    "title": 'BLUE SAPHIRE LADIES WATCH',
    "text" : 'Smooth stretch fabric, contrast binding, round neckline, cap sleeves, ruched side detail.\n' +
                'Take your shoe style to new heights with this alluring peep toe court shoe. Features a slim high heel and ' +
            'metallic detailing along the platform. Team with a high waisted pencil skirt and midi top for after dark ' +
            'glam.'
};

export default class CommunityScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style = {styles.scrollViewStyle}>
        <ScrollView
          showsVerticalScrollIndicator={false}>
          {array.map(index => {
            return (
              <CommunityBlock
                  style={styles.scrollViewStyle}
                onPress={() =>
                  Actions.push('CommunityDetailsScreen', {
                    item_details: index,
                  })
                }
                source={require('../../assets/watches/lux7.jpg')}
                title={'BLUE SAPHIRE LADIES WATCH'}
                text={'Smooth stretch fabric, contrast binding, round neckline, cap sleeves, ruched side detail.\n' +
                'Take your shoe style to new heights with this alluring peep toe court shoe. Features a slim high heel and ' +
                'metallic detailing along the platform. Team with a high waisted pencil skirt and midi top for after dark ' +
                'glam.'}
                  favorite = {true}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
