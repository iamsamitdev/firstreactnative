/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import CounterState from './components/CounterState';
import FlexColumn from './components/FlexColumn';
import MultiRowColumn from './components/MultiRowColumn';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MultiRowColumn);
