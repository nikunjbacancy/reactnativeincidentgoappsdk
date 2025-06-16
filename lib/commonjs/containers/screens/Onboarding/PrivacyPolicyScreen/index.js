"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../assets");
var _react = _interopRequireWildcard(require("react"));
var _constants = require("../../../../containers/app/constants");
var _styles = require("./styles");
var _components = require("../../../../components");
var _reactNativeWebview = require("react-native-webview");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const PrivacyPolicyScreen = ({
  navigation: {
    goBack
  }
}) => {
  const goBackToSignIn = (0, _react.useCallback)(() => goBack(), []);
  return /*#__PURE__*/_react.default.createElement(_styles.MainView, null, /*#__PURE__*/_react.default.createElement(_styles.BackButtonView, null, /*#__PURE__*/_react.default.createElement(_styles.BackButtonCol, null, /*#__PURE__*/_react.default.createElement(_components.IconButton, {
    source: _assets.images.icBackDark(),
    onPress: goBackToSignIn
  }))), /*#__PURE__*/_react.default.createElement(_styles.WebViewStyle, null, /*#__PURE__*/_react.default.createElement(_reactNativeWebview.WebView, {
    source: {
      uri: _constants.LINKS.privacy
    }
  })));
};
var _default = exports.default = PrivacyPolicyScreen;
//# sourceMappingURL=index.js.map