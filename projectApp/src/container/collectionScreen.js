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

type Props = {};

const array = ["La collection d'hiver", 'Chic et choc', 'Collection Team 7'];

export default class CollectionScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderItem = ({item, index}) => {
    return <CommunityBlock />;
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
