"use strict";

require("react-native-root-siblings");
var _sdkConfigs = require("./sdkConfigs");
var _app = require("../src/containers/app");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; } /* eslint-disable */
console.disableYellowBox = true;
console.ignoredYellowBox = ["ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.", "EventEmitter.removeListener('url', ...): Method has been deprecated. Please instead use `remove()` on the subscription returned by `EventEmitter.addListener`."];
if (__DEV__) Promise.resolve().then(() => _interopRequireWildcard(require('./core/reactotron')));
module.exports = {
  sdkConfigs: _sdkConfigs.sdkConfigs,
  IncidentGoPackage: _app.IncidentGoPackage
};
//# sourceMappingURL=index.js.map