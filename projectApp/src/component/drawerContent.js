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
  ViewPropTypes,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'red',
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
        <TouchableOpacity
          onPress={() => {
            Actions.replace('MainScreen');
          }}>
          <Text>Accueil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Actions.replace('CustomizerScreen');
          }}>
          <Text>Créer ma montre</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Actions.replace('CommunityScreen');
          }}>
          <Text>La tribu</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DrawerContent;
