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

let array = [
  {
    source: require('../../assets/watches/lux6.jpg'),
    title: 'BLACK NIGHT GENTLEMEN WATCH',
    text: 'Lorem ipsum dolor sit amet, ad semper deseruisse vim, eos equidem consequat definitiones cu, vel at etiam velit efficiantur. Est ex quando causae efficiendi, ad volutpat periculis definiebas est.'
  },
  {
    source: require('../../assets/watches/lux8.jpg'),
    title: 'BLACK RED SHADOW LINX',
    text: 'Lorem ipsum dolor sit amet, ad semper deseruisse vim, eos equidem consequat definitiones cu, vel at etiam velit efficiantur. Est ex quando causae efficiendi, ad volutpat periculis definiebas est.'
  },
  {
    source: require('../../assets/watches/lux5.jpg'),
    title: 'DESIGNER BLACK CHROME WATCH',
    text: 'Lorem ipsum dolor sit amet, ad semper deseruisse vim, eos equidem consequat definitiones cu, vel at etiam velit efficiantur. Est ex quando causae efficiendi, ad volutpat periculis definiebas est.'
  }
];

export default class HomeScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderItem = ({item, index}) => {
    return (
      <MainScreenBlock
        source={array[index].source}
        title={array[index].title}
        text={array[index].text}
        onPress={() =>
          Actions.push('CommunityDetailsScreen', {
            item_details: index,
            title: item.title,
            description: item.text,
            source: item.source,
          })
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
