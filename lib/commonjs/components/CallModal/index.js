"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.List = void 0;
var _assets = require("../../assets");
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _reactNativeModal = _interopRequireDefault(require("react-native-modal"));
var _device = require("../../utils/device");
var _styled = _interopRequireDefault(require("../../utils/styled"));
var _GradientButton = _interopRequireDefault(require("../GradientButton"));
var _IconButton = _interopRequireDefault(require("../IconButton"));
var _messages = _interopRequireDefault(require("./messages"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const CallModal = ({
  isVisible,
  onShow,
  onHide,
  hideModal,
  organization,
  organizations
}) => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const renderItem = itemInfo => {
    var _itemInfo$item2;
    return /*#__PURE__*/_react.default.createElement(OrganizationButton, {
      onPress: () => {
        var _itemInfo$item;
        return (0, _device.makeCall)((_itemInfo$item = itemInfo.item) === null || _itemInfo$item === void 0 ? void 0 : _itemInfo$item.phone);
      },
      text: (_itemInfo$item2 = itemInfo.item) === null || _itemInfo$item2 === void 0 ? void 0 : _itemInfo$item2.name
    });
  };
  const call911 = async () => {
    await (0, _device.makeCall)('911');
  };
  return /*#__PURE__*/_react.default.createElement(_reactNativeModal.default, {
    useNativeDriver: true,
    animationIn: "zoomIn",
    animationOut: "zoomOut",
    isVisible: isVisible,
    onBackButtonPress: hideModal,
    onBackdropPress: hideModal,
    onModalWillShow: onShow,
    onModalWillHide: onHide
  }, /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(CloseButton, {
    onPress: hideModal,
    source: _assets.images.icClose()
  }), /*#__PURE__*/_react.default.createElement(Content, null, /*#__PURE__*/_react.default.createElement(Title, null, formatMessage(_messages.default.wantCall)), /*#__PURE__*/_react.default.createElement(SubTitle, null, formatMessage(_messages.default.emergency)), /*#__PURE__*/_react.default.createElement(EmergencyButton, {
    onPress: call911,
    text: formatMessage(_messages.default.call911)
  })), /*#__PURE__*/_react.default.createElement(ListContainer, null, /*#__PURE__*/_react.default.createElement(SubTitle, null, formatMessage(_messages.default.organization)), organizations ? /*#__PURE__*/_react.default.createElement(List, {
    keyExtractor: org => {
      var _org$id;
      return ((_org$id = org.id) === null || _org$id === void 0 ? void 0 : _org$id.toString()) || '';
    },
    renderItem: renderItem,
    data: organizations
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, renderItem({
    item: organization
  })))));
};
const Container = _styled.default.View`
  border-radius: 5px;
  height: 75%;
  background-color: ${({
  theme
}) => theme.colors.white};
  padding: 20px 20px 0;
  position: relative;
`;
const Content = _styled.default.View`
  margin-bottom: 10px;
`;
const ListContainer = _styled.default.View`
  height: 70%;
  margin-bottom: auto;
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
const Title = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  font-size: 20px;
  line-height: 28px;
  color: ${({
  theme
}) => theme.colors.dark};
  text-align: center;
`;
const SubTitle = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: 16px;
  line-height: 28px;
  margin-top: 10px;
  color: ${({
  theme
}) => theme.colors.dark};
  text-align: center;
`;
const EmergencyButton = (0, _styled.default)(_GradientButton.default)`
  margin-top: 10px;
`;
const OrganizationButton = (0, _styled.default)(_GradientButton.default)`
  margin-top: 10px;
`;
const List = exports.List = (0, _styled.default)(_reactNative.FlatList)`
  margin-bottom: 20px;
`;
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(CallModal);
//# sourceMappingURL=index.js.map