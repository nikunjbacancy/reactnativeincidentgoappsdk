/* eslint-disable */
import 'react-native-root-siblings';
import { sdkConfigs } from './sdkConfigs';
import { IncidentGoPackage } from '../src/containers/app';
import { HeadlessTask, NetworkRestoredTask } from './HeadlessTask';

console.disableYellowBox = true;
console.ignoredYellowBox =
    ["ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
        "EventEmitter.removeListener('url', ...): Method has been deprecated. Please instead use `remove()` on the subscription returned by `EventEmitter.addListener`."];

if (__DEV__) import('./core/reactotron');

module.exports = { sdkConfigs, IncidentGoPackage, HeadlessTask, NetworkRestoredTask };
