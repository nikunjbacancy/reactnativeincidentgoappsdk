"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../../../assets");
var _components = require("../../../../../../components");
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _reactNativeModal = _interopRequireDefault(require("react-native-modal"));
var _styled = _interopRequireDefault(require("../../../../../../utils/styled"));
var _messages = _interopRequireDefault(require("../messages"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const deviceHeight = _reactNative.Dimensions.get('window').height;
const SafeModal = ({
  isVisible,
  hideModal,
  onContinue,
  requestingImSafe
}) => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const [comment, setComment] = (0, _react.useState)('');
  const handleContinue = (0, _react.useCallback)(() => {
    onContinue(comment);
    setComment('');
  }, [comment, setComment]);
  return /*#__PURE__*/_react.default.createElement(_reactNativeModal.default, {
    useNativeDriver: true,
    animationIn: "zoomIn",
    animationOut: "zoomOut",
    isVisible: isVisible,
    onBackButtonPress: hideModal,
    onBackdropPress: hideModal,
    avoidKeyboard: true
  }, /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(CheckIcon, {
    source: _assets.images.icSuccess()
  }), /*#__PURE__*/_react.default.createElement(Title, null, formatMessage(_messages.default.safeModalTitle)), /*#__PURE__*/_react.default.createElement(MessageRow, null, /*#__PURE__*/_react.default.createElement(Message, null, formatMessage(_messages.default.safeModalInfo))), /*#__PURE__*/_react.default.createElement(InputRow, null, /*#__PURE__*/_react.default.createElement(InputText, {
    value: comment,
    onChangeText: setComment,
    placeholder: formatMessage(_messages.default.safeModalCommentPlaceholder)
  })), /*#__PURE__*/_react.default.createElement(ButtonContainer, null, /*#__PURE__*/_react.default.createElement(CancelButton, {
    onPress: hideModal,
    text: formatMessage(_messages.default.safeModalCancel)
  }), /*#__PURE__*/_react.default.createElement(ContinueButton, {
    onPress: handleContinue,
    text: formatMessage(_messages.default.safeModalContinue),
    loading: requestingImSafe
  }))));
};
const Container = _styled.default.View`
  align-items: center;
  border-radius: 20px;
  height: ${deviceHeight < 768 ? 360 : 430}px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  background-color: ${({
  theme
}) => theme.colors.white};
`;
const CheckIcon = _styled.default.Image`
  margin-top: ${deviceHeight < 768 ? 20 : 30}px;
`;
const Title = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  font-size: ${({
  theme
}) => theme.fonts.titleSize};
  color: ${({
  theme
}) => theme.colors.dark};
  margin: ${deviceHeight < 768 ? 10 : 20}px 0;
  text-align: center;
`;
const MessageRow = _styled.default.View`
  flex: 1;
  padding: 0 30px;
`;
const Message = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: 16px;
  color: ${({
  theme
}) => theme.colors.dark};
  text-align: center;
`;
const InputRow = _styled.default.View`
  margin: ${deviceHeight < 768 ? 10 : 15}px 30px;
  background: ${({
  theme
}) => theme.colors.nearWhite};
  border-radius: 6px;
  height: ${deviceHeight < 768 ? 40 : 60}px;
  padding: 8px 0;
  align-self: stretch;
`;
const InputText = _styled.default.TextInput.attrs(({
  theme
}) => ({
  placeholderTextColor: theme.colors.lighter,
  textAlignVertical: 'top'
}))`
  color: ${({
  theme
}) => theme.colors.dark};
  flex-grow: 1;
  padding: 0 15px;
  font-size: 15px;
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
const CancelButton = (0, _styled.default)(_components.GradientButton).attrs(({
  theme
}) => ({
  textStyle: {
    color: theme.colors.dark,
    textTransform: 'uppercase',
    fontSize: 18
  }
}))`
  flex: 0.5;
  height: ${deviceHeight < 768 ? 50 : 60}px;
  background-color: ${({
  theme
}) => theme.colors.white};
  border-radius: 0;
  border-bottom-left-radius: 20px;
`;
const ContinueButton = (0, _styled.default)(_components.GradientButton).attrs(({
  theme
}) => ({
  textStyle: {
    color: theme.colors.highlight,
    textTransform: 'uppercase',
    fontSize: 18
  }
}))`
  flex: 0.5;
  height: ${deviceHeight < 768 ? 50 : 60}px;
  background-color: ${({
  theme
}) => theme.colors.white};
  border-radius: 0;
  border-bottom-right-radius: 20px;
  border-left-width: 1px;
  border-left-color: ${({
  theme
}) => theme.colors.nearWhite};
`;
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(SafeModal);
//# sourceMappingURL=index.js.map