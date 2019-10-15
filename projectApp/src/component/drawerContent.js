/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, ViewPropTypes, Button} from 'react-native';
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
        <Text>Title: {this.props.title}</Text>
        {this.props.name === 'tab_1_1' && (
          <Button title="Back" onPress={Actions.tab_1_2}>
            next screen for tab1_1
          </Button>
        )}
        {this.props.name === 'tab_2_1' && (
          <Button title="Back" onPress={Actions.tab_2_2}>
            next screen for tab2_1
          </Button>
        )}
        <Button title="Back" onPress={Actions.pop} />
        <Button title="Back" onPress={Actions.tab_1}>
          Switch to tab1
        </Button>
        <Button title="Back" onPress={Actions.tab_2}>
          Switch to tab2
        </Button>
        <Button title="Back" onPress={Actions.tab_3}>
          Switch to tab3
        </Button>
        <Button title="Back" onPress={Actions.tab_4_1}>
          Switch to tab4
        </Button>
        <Button
          title="Back"
          onPress={() => {
            Actions.___tab_5({data: 'test!'});
          }}>
          Switch to tab5 with data
        </Button>
        <Button title="Back" onPress={Actions.echo}>
          Push Clone Scene (EchoView)
        </Button>
        <Button title="Back" onPress={Actions.launch}>
          Reset back to launch
        </Button>
      </View>
    );
  }
}

export default DrawerContent;
