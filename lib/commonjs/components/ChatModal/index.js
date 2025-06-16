"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../assets");
var _selectors = require("../../containers/app/selectors");
var _forEach = _interopRequireDefault(require("lodash/forEach"));
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _reactNativeGiftedChat = require("react-native-gifted-chat");
var _reactNativeModal = _interopRequireDefault(require("react-native-modal"));
var _hooks = require("../../utils/hooks");
var _styled = _interopRequireDefault(require("../../utils/styled"));
var _v = _interopRequireDefault(require("uuid/v4"));
var _IconButton = _interopRequireDefault(require("../IconButton"));
var _messages = _interopRequireDefault(require("./messages"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable no-param-reassign */

const ChatModal = ({
  isVisible,
  hideModal,
  onShow,
  onHide,
  messages,
  onMessageSent,
  isReadMode
}) => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const user = (0, _hooks.useSelector)((0, _selectors.makeSelectGiftedChatUser)());
  const [messagesWithPending, setMessagesWithPending] = (0, _react.useState)(messages);
  (0, _react.useEffect)(() => {
    setMessagesWithPending(messages);
  }, [messages]);
  const handleSendMessage = (0, _react.useCallback)(messagesToSent => {
    (0, _forEach.default)(messagesToSent, message => {
      message.pending = true;
    });
    setMessagesWithPending(prevState => _reactNativeGiftedChat.GiftedChat.append(prevState, messagesToSent));
    onMessageSent(messagesToSent);
  }, []);
  const getGiftedChatMessage = (0, _react.useCallback)(text => [{
    _id: (0, _v.default)(),
    text,
    createdAt: new Date(),
    user
  }], []);
  const emptyInput = () => /*#__PURE__*/_react.default.createElement(_reactNative.View, null);
  return /*#__PURE__*/_react.default.createElement(_reactNativeModal.default, {
    useNativeDriver: true,
    animationIn: "slideInUp",
    animationOut: "slideOutDown",
    isVisible: isVisible,
    onBackButtonPress: hideModal,
    onBackdropPress: hideModal,
    onModalWillShow: onShow,
    onModalWillHide: onHide,
    style: {
      margin: 0,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(CloseButton, {
    source: _assets.images.icClose(),
    onPress: hideModal
  }), /*#__PURE__*/_react.default.createElement(Content, null, /*#__PURE__*/_react.default.createElement(_reactNativeGiftedChat.GiftedChat, {
    user: user,
    messages: messagesWithPending,
    onSend: handleSendMessage,
    renderChatFooter: () => /*#__PURE__*/_react.default.createElement(ChatFooter, null, /*#__PURE__*/_react.default.createElement(TagContainer, {
      onPress: () => handleSendMessage(getGiftedChatMessage(formatMessage(_messages.default.iNeedHelp)))
    }, /*#__PURE__*/_react.default.createElement(Tag, null, formatMessage(_messages.default.iNeedHelp))), /*#__PURE__*/_react.default.createElement(TagContainer, {
      onPress: () => handleSendMessage(getGiftedChatMessage(formatMessage(_messages.default.someoneSuspicious)))
    }, /*#__PURE__*/_react.default.createElement(Tag, null, formatMessage(_messages.default.someoneSuspicious)))),
    renderInputToolbar: isReadMode ? emptyInput : undefined
  }))));
};
const Container = _styled.default.View`
  background-color: ${({
  theme
}) => theme.colors.white};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 80%;
  width: 100%;
  display: flex;
  position: relative;
`;
const Content = _styled.default.View`
  flex: 1;
  padding: 15px 15px 25px;
`;
const CloseButton = (0, _styled.default)(_IconButton.default)`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: ${({
  theme
}) => theme.colors.white};
  position: absolute;
  top: -60px;
  right: 20px;
`;
const ChatFooter = _styled.default.View`
  height: 44px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const TagContainer = _styled.default.TouchableOpacity`
  border: 0.5px solid ${({
  theme
}) => theme.colors.dark};
  justify-content: center;
  align-items: center;
  margin-left: 3px;
  margin-right: 3px;
  padding: 5px 10px;
  border-radius: 3px;
`;
const Tag = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  color: ${({
  theme
}) => theme.colors.dark};
  font-weight: 100;
`;
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(ChatModal);
//# sourceMappingURL=index.js.map