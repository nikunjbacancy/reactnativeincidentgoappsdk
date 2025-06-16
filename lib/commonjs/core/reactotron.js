"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var _split = _interopRequireDefault(require("lodash/split"));
var _reactNative = require("react-native");
var _reactotronReactNative = _interopRequireDefault(require("reactotron-react-native"));
var _reactotronRedux = require("reactotron-redux");
var _reactotronReduxSaga = _interopRequireDefault(require("reactotron-redux-saga"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// eslint-disable-next-line no-console
console.tron = _reactotronReactNative.default;
const {
  scriptURL
} = _reactNative.NativeModules.SourceCode;
const scriptHostname = (0, _split.default)((0, _split.default)(scriptURL, '://')[1], ':')[0];
console.log("-scriptHostname=>", scriptHostname);
var _default = exports.default = _reactotronReactNative.default.setAsyncStorageHandler(_asyncStorage.default).configure({
  name: 'Incident Co',
  host: scriptHostname
}).useReactNative({
  asyncStorage: false
}).use((0, _reactotronRedux.reactotronRedux)()).use((0, _reactotronReduxSaga.default)({})).connect(); // swizzle the old one
const yeOldeConsoleLog = console.log;

// make a new one
console.log = (...args) => {
  // always call the old one, because React Native does magic swizzling too
  yeOldeConsoleLog(...args);

  // send this off to Reactotron.
  _reactotronReactNative.default.display({
    name: 'CONSOLE.LOG',
    value: args,
    preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null
  });
};
//# sourceMappingURL=reactotron.js.map