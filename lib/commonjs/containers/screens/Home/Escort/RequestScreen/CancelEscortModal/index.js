"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _components = require("../../../../../../components");
var _actions = require("../../../../../../containers/app/actions");
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNativeModal = _interopRequireDefault(require("react-native-modal"));
var _hooks = require("../../../../../../utils/hooks");
var _backgroundGeolocation = require("../../../../../../utils/location/backgroundGeolocation");
var _styled = _interopRequireDefault(require("../../../../../../utils/styled"));
var _actions2 = require("../actions");
var _messages = _interopRequireDefault(require("../messages"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const CancelEscortModal = ({
  isVisible
}) => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const hideModalAction = (0, _hooks.useAction)(_actions2.hideCancelEscortModal);
  const cancelEscortAction = (0, _hooks.useAction)(_actions2.cancelEscortRequest);
  const clearLocation = (0, _hooks.useAction)(_actions.ClearLocationData);
  const cancelEscort = (0, _react.useCallback)(() => {
    cancelEscortAction();
    (0, _backgroundGeolocation.stopBackgroundGeolocation)(clearLocation);
  }, [cancelEscortAction]);
  return /*#__PURE__*/_react.default.createElement(_reactNativeModal.default, {
    useNativeDriver: true,
    animationIn: "zoomIn",
    animationOut: "zoomOut",
    isVisible: isVisible,
    onBackButtonPress: hideModalAction,
    onBackdropPress: hideModalAction
  }, /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(Title, null, formatMessage(_messages.default.cancelEscortModalTitle)), /*#__PURE__*/_react.default.createElement(ButtonContainer, null, /*#__PURE__*/_react.default.createElement(CancelEscortButton, {
    onPress: cancelEscort
  }, /*#__PURE__*/_react.default.createElement(CancelText, null, formatMessage(_messages.default.cancelEscort))), /*#__PURE__*/_react.default.createElement(ContinueEscortButton, {
    onPress: hideModalAction,
    text: formatMessage(_messages.default.continueEscort)
  }))));
};
const Container = _styled.default.View`
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  height: 280px;
  background-color: ${({
  theme
}) => theme.colors.white};
`;
const Title = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  font-size: 18px;
  line-height: 24px;
  color: ${({
  theme
}) => theme.colors.dark};
  margin: 30px 30px 5px;
  text-align: center;
`;
const ButtonContainer = _styled.default.View`
  display: flex;
  margin-top: auto;
`;
const CancelEscortButton = _styled.default.TouchableOpacity`
  height: 60px;
  background-color: ${({
  theme
}) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-top-color: ${({
  theme
}) => theme.colors.nearWhite};
`;
const CancelText = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.dark};
  text-transform: uppercase;
  font-size: 18px;
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
`;
const ContinueEscortButton = (0, _styled.default)(_components.GradientButton).attrs(({
  theme
}) => ({
  textStyle: {
    color: theme.colors.highlight,
    textTransform: 'uppercase',
    fontSize: 18
  }
}))`
  height: 60px;
  background-color: ${({
  theme
}) => theme.colors.white};
  border-top-width: 1px;
  border-top-color: ${({
  theme
}) => theme.colors.nearWhite};
  border-radius: 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;
var _default = exports.default = CancelEscortModal;
//# sourceMappingURL=index.js.map