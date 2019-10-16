/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount has been renamed',
  'Warning: componentWillUpdate has been renamed',
  'Warning: componentWillReceiveProps has been renamed',
  'Module RCTImageLoader requires',
]);

AppRegistry.registerComponent(appName, () => App);
