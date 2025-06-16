import AsyncStorage from '@react-native-async-storage/async-storage';
import split from 'lodash/split';
import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

// eslint-disable-next-line no-console
console.tron = Reactotron;
const {
  scriptURL
} = NativeModules.SourceCode;
const scriptHostname = split(split(scriptURL, '://')[1], ':')[0];
console.log("-scriptHostname=>", scriptHostname);
export default Reactotron.setAsyncStorageHandler(AsyncStorage).configure({
  name: 'Incident Co',
  host: scriptHostname
}).useReactNative({
  asyncStorage: false
}).use(reactotronRedux()).use(sagaPlugin({})).connect();

// swizzle the old one
const yeOldeConsoleLog = console.log;

// make a new one
console.log = (...args) => {
  // always call the old one, because React Native does magic swizzling too
  yeOldeConsoleLog(...args);

  // send this off to Reactotron.
  Reactotron.display({
    name: 'CONSOLE.LOG',
    value: args,
    preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null
  });
};
//# sourceMappingURL=reactotron.js.map