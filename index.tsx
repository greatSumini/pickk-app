/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.config.js';
import App from './src/app';

AppRegistry.registerComponent(appName, () => App);
