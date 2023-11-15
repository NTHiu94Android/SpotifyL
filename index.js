/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { PlaybackService } from './src/services/PlaybackService';
import TrackPlayer from 'react-native-track-player';
// import ReactNativeForegroundService from "@supersami/rn-foreground-service";
// ReactNativeForegroundService.register();

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => PlaybackService);
