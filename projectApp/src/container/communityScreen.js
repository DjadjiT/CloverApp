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

export default class CommunityScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.scrollViewStyle}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.global.communityList.map((item, index) => {
            {
              console.log('index ' + index);
            }
            return (
              <CommunityBlock
                style={styles.scrollViewStyle}
                onPress={() =>
                  Actions.push('CommunityDetailsScreen', {
                    item_details: index,
                    title: item.title,
                    description: item.text,
                    source: item.source,
                  })
                }
                source={item.source}
                title={item.title}
                text={item.text}
                favorite={item.favorite}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
  onFavoriteClick(id, bool) {}
}
