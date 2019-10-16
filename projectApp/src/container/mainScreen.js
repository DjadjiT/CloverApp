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
    return <CommunityBlock />;
  };

  render() {
    return (
      <View style={styles.mainView}>
        <View>
          <Image
            source={require('../../assets/bandeau.png')}
            style={{height: 80, width: responsiveWidth(100)}}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
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
        <View>
          <Image
            source={require('../../assets/bandeau.png')}
            style={{height: 80, width: responsiveWidth(100)}}
          />
        </View>
      </View>
    );
  }
}
