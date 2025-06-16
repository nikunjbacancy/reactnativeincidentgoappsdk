"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MenuOptionText = exports.MenuOptionInner = exports.MenuOptionIcon = exports.MenuContainer = exports.HamburgerMenu = void 0;
var _assets = require("../../assets");
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _styled = _interopRequireDefault(require("../../utils/styled"));
var _reactNativePopupMenu = require("react-native-popup-menu");
var _colors = _interopRequireDefault(require("../../assets/colors"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const icon = {
  width: 22,
  height: 32
};
const HeaderWithButton = ({
  title,
  onButtonClick,
  uneadNotification
}) => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.SafeAreaView, null, /*#__PURE__*/_react.default.createElement(HeaderRow, null, /*#__PURE__*/_react.default.createElement(Logo, {
    source: _assets.images.logo()
  }), /*#__PURE__*/_react.default.createElement(TitleText, null, title), /*#__PURE__*/_react.default.createElement(EmptySpace, null), uneadNotification > 0 && /*#__PURE__*/_react.default.createElement(MenuContainer, null, /*#__PURE__*/_react.default.createElement(_reactNativePopupMenu.MenuTrigger, null, /*#__PURE__*/_react.default.createElement(HamburgerMenu, {
    source: _assets.images.more()
  })), /*#__PURE__*/_react.default.createElement(_reactNativePopupMenu.MenuOptions, {
    customStyles: optionsStyles
  }, /*#__PURE__*/_react.default.createElement(_reactNativePopupMenu.MenuOption, {
    onSelect: () => onButtonClick()
  }, /*#__PURE__*/_react.default.createElement(MenuOptionInner, null, /*#__PURE__*/_react.default.createElement(MenuOptionText, null, "Mark as Read All")))))));
};
const HeaderRow = _styled.default.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  padding: 0 30px;
`;
const Logo = _styled.default.Image`
  width: ${icon.width}px;
  height: ${icon.height}px;
  tint-color: ${({
  theme
}) => theme.colors.dark};
`;
const EmptySpace = _styled.default.View`
  flex:1
`;
const TitleText = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  text-align: center;
  font-size: ${({
  theme
}) => theme.fonts.extraLargeSize};
  margin-left: 20px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
const MenuContainer = exports.MenuContainer = (0, _styled.default)(_reactNativePopupMenu.Menu)`
  
  background-color: ${({
  theme
}) => theme.colors.transparent};
  border-left-color: ${({
  theme
}) => theme.colors.lightGrey};
`;
const MenuOptionInner = exports.MenuOptionInner = _styled.default.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 15px 20px;
  border-bottom-width: 1px;
  border-color: ${({
  theme
}) => theme.colors.white};
`;
const MenuOptionText = exports.MenuOptionText = _styled.default.Text`
  font-size: 16px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
const MenuOptionIcon = exports.MenuOptionIcon = _styled.default.Image`
  margin-left: auto;
`;
const HamburgerMenu = exports.HamburgerMenu = _styled.default.Image`
  width: 22px;
  height: 22px;
`;
var _default = exports.default = (0, _styled.default)(HeaderWithButton)`
  margin-top: 20px;
`;
const optionsStyles = {
  optionsContainer: {
    backgroundColor: _colors.default.nearWhite,
    width: 'auto',
    flexDirection: 'row-reverse',
    marginTop: 25
  },
  optionWrapper: {
    width: 200,
    padding: 0,
    margin: 0,
    marginRight: -30
  },
  optionTouchable: {
    activeOpacity: 70
  },
  OptionTouchableComponent: _reactNative.TouchableHighlight
};
//# sourceMappingURL=index.js.map