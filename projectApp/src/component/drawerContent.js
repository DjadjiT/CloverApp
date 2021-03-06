/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ViewPropTypes,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import InAppBrowser from 'react-native-inappbrowser-reborn';
import {ParallaxImage} from "react-native-snap-carousel";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 2,
    justifyContent: 'center',
  },
  text: {
    fontSize: responsiveFontSize(3),
    color: 'white',
    marginVertical: responsiveHeight(5),
  },
  button: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 2,
  },
});

class DrawerContent extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    sceneStyle: ViewPropTypes.style,
    title: PropTypes.string,
  };

  static contextTypes = {
    drawer: PropTypes.object,
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Drawer Content</Text>
        <Button onPress={Actions.closeDrawer}>Back</Button> */}
        <Image
          source={require('../../assets/denim-hand-person.jpg')}
          style={{position: 'absolute', height: responsiveHeight(100), width: responsiveWidth(100)}}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Actions.replace('MainScreen');
          }}>
          <Text style={styles.text}>Accueil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Actions.replace('CustomizerScreen');
          }}>
          <Text style={styles.text}>Créer ma montre</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Actions.replace('CommunityScreen');
          }}>
          <Text style={styles.text}>La tribu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Actions.replace('CollectionScreen');
          }}>
          <Text style={styles.text}>Collection actuelle</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            InAppBrowser.open('https://www.augarde.com');
          }}>
          <Text style={styles.text}> Made by Augarde</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DrawerContent;
