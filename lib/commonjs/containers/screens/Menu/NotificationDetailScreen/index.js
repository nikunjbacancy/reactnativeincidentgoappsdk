"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../assets");
var _components = require("../../../../components");
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _navigation = _interopRequireDefault(require("../../../../utils/navigation"));
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// import NavigatorService from 'utils/navigation';

const NotificationDetailScreen = ({
  navigation: {
    getParam
  }
}) => {
  // 
  let details = getParam('detailItem');
  console.log("Notfication detail ===>", details);
  (0, _react.useEffect)(() => {});
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/_react.default.createElement(_components.SafeAreaContainer, null, /*#__PURE__*/_react.default.createElement(_components.Header, {
    title: "Notification Detail"
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: {
      marginHorizontal: 20,
      marginTop: 20
    }
  }, JSON.stringify(details))), /*#__PURE__*/_react.default.createElement(_styles.BackButtonRow, null, /*#__PURE__*/_react.default.createElement(_components.ScreenActionButton, {
    onCancel: _navigation.default.back,
    tintColor: _assets.colors.white
  }))));
};
var _default = exports.default = NotificationDetailScreen;
//# sourceMappingURL=index.js.map