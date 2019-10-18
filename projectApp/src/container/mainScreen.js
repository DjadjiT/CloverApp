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

import MainScreenBlock from '../component/mainScreenBlock';
import CollectionCarousel from '../component/collectionCarousel';

import styles from '../styles/mainScreenStyle';
import commonStyles from '../sharedStyles/commonStyle';

type Props = {};

let array = [{name: 'object 1'}, {name: 'object 2'}, {name: 'object 3'}];

export default class HomeScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderItem = ({item, index}) => {
    return (
      <MainScreenBlock
        source={require('../../assets/watches/lux7.jpg')}
        title={'BLUE SAPHIRE LADIES WATCH'}
        text={
          'Smooth stretch fabric, contrast binding, round neckline, cap sleeves, ruched side detail.\n' +
          'Take your shoe style to new heights with this alluring peep toe court shoe. Features a slim high heel and ' +
          'metallic detailing along the platform. Team with a high waisted pencil skirt and midi top for after dark ' +
          'glam.'
        }
      />
    );
  };

  render() {
    return (
      <ScrollView style={commonStyles.mainView}>
        <View style={styles.topImageContainer}>
          <Image
            source={require('../../assets/bandeau_dark.png')}
            style={styles.topImage}
          />
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/logoclover.png')}
              resizeMode={'contain'}
              style={styles.topAppLogo}
            />
            <Text style={[styles.mainText, {marginTop: 20}]}>CloverApp</Text>
          </View>
          <Text style={styles.mainText}>by</Text>
          <Image
            source={require('../../assets/Logo-Augarde-HD.png')}
            resizeMode={'contain'}
            style={styles.topBrandLogo}
          />
        </View>
        <View style={styles.customizeButtonContainer}>
          <TouchableOpacity onPress={() => Actions.push('CustomizerScreen')}>
            <View style={styles.customizeButton}>
              <Text style={styles.customizeButtonText}>Créer une montre</Text>
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
        <View style={styles.eventContainer}>
          <Image
            source={require('../../assets/bandeau_event.jpg')}
            style={styles.eventImage}
          />
          <View style={styles.eventTextContainer}>
            <Text style={styles.eventText}>{'Nouvelle collection'}</Text>
            <Text style={styles.eventText}>{'J-16'}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
