"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _components = require("../../../../../../components");
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNativeModal = _interopRequireDefault(require("react-native-modal"));
var _hooks = require("../../../../../../utils/hooks");
var _styled = _interopRequireDefault(require("../../../../../../utils/styled"));
var _actions = require("../actions");
var _messages = _interopRequireDefault(require("../messages"));
var _selectors = require("../selectors");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/* eslint-disable no-unused-expressions */

const CancelTipModal = ({
  isVisible,
  onShow,
  onHide,
  onPressYes
}) => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const hideModalAction = (0, _hooks.useAction)(_actions.hideCancelIncidentModal);
  const deleteIncidentAction = (0, _hooks.useAction)(_actions.deleteIncidentRequest);
  const deletingIncident = (0, _hooks.useSelector)((0, _selectors.makeSelectDeletingIncident)());
  const handleDeleteIncidentAction = (0, _react.useCallback)(() => {
    onPressYes === null || onPressYes === void 0 || onPressYes();
    deleteIncidentAction();
  }, [onPressYes, deleteIncidentAction]);
  return /*#__PURE__*/_react.default.createElement(_reactNativeModal.default, {
    useNativeDriver: true,
    animationIn: "zoomIn",
    animationOut: "zoomOut",
    isVisible: isVisible,
    onBackButtonPress: hideModalAction,
    onBackdropPress: hideModalAction,
    onModalWillShow: onShow,
    onModalWillHide: onHide
  }, /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(Title, null, formatMessage(_messages.default.cancelIncidentTitle)), /*#__PURE__*/_react.default.createElement(Message, null, formatMessage(_messages.default.cancelIncidentMessage)), /*#__PURE__*/_react.default.createElement(ButtonContainer, null, /*#__PURE__*/_react.default.createElement(YesButton, {
    loading: deletingIncident,
    onPress: handleDeleteIncidentAction,
    text: formatMessage(_messages.default.yes)
  }), /*#__PURE__*/_react.default.createElement(CancelButton, {
    onPress: hideModalAction
  }, /*#__PURE__*/_react.default.createElement(CancelText, null, formatMessage(_messages.default.no))))));
};
const Container = _styled.default.View`
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  height: 250px;
  background-color: ${({
  theme
}) => theme.colors.white};
  overflow: hidden;
`;
const Title = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultSemiBoldFamily};
  font-size: 20px;
  line-height: 28px;
  color: ${({
  theme
}) => theme.colors.dark};
  margin: 20px 30px 0;
  text-align: center;
`;
const Message = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: 16px;
  line-height: 24px;
  margin: auto 30px 0;
  color: ${({
  theme
}) => theme.colors.dark};
  text-align: center;
`;
const ButtonContainer = _styled.default.View`
  display: flex;
  flex-direction: row;
  margin-top: auto;
  border-top-width: 1px;
  border-top-color: ${({
  theme
}) => theme.colors.nearWhite};
`;
const CancelButton = _styled.default.TouchableOpacity`
  flex: 0.5;
  background-color: ${({
  theme
}) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-left-width: 1px;
  border-left-color: ${({
  theme
}) => theme.colors.nearWhite};
`;
const CancelText = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.highlight};
  text-transform: uppercase;
  font-size: 18px;
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
`;
const YesButton = (0, _styled.default)(_components.GradientButton).attrs(({
  theme
}) => ({
  textStyle: {
    color: theme.colors.dark,
    textTransform: 'uppercase',
    fontSize: 18
  }
}))`
  flex: 0.5;
  height: 60px;
  background-color: ${({
  theme
}) => theme.colors.white};
`;
var _default = exports.default = CancelTipModal;
//# sourceMappingURL=index.js.map