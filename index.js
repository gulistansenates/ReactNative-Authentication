/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';

import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen/';

AppRegistry.registerComponent(appName, () => SignUpScreen);
