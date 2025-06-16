"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _map = _interopRequireDefault(require("lodash/map"));
var _split = _interopRequireDefault(require("lodash/split"));
var _toUpper = _interopRequireDefault(require("lodash/toUpper"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _styled = _interopRequireDefault(require("../../../../../../utils/styled"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ContactItem = ({
  person,
  person: {
    title,
    name,
    phone
  },
  onSelectContact
}) => {
  const handleSelectContact = () => {
    onSelectContact(person);
  };
  const renderUserIcon = () => {
    if (!name) return;
    const initials = (0, _map.default)((0, _split.default)(name, ' '), str => str ? str.charAt(0) : '').join('');
    return /*#__PURE__*/_react.default.createElement(FakeImageContainer, null, /*#__PURE__*/_react.default.createElement(FakeImageText, null, (0, _toUpper.default)(initials)));
  };
  return /*#__PURE__*/_react.default.createElement(Container, {
    onPress: handleSelectContact
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, renderUserIcon(), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(NameContainer, null, /*#__PURE__*/_react.default.createElement(FullName, null, name), title ? /*#__PURE__*/_react.default.createElement(Role, null, `(${title})`) : null), /*#__PURE__*/_react.default.createElement(PhoneNumberBox, null, /*#__PURE__*/_react.default.createElement(PhoneNumber, null, phone)))));
};
const Container = _styled.default.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 30px;
  border-bottom-width: 1px;
  border-color: ${({
  theme
}) => theme.colors.nearWhite};
`;
const NameContainer = _styled.default.View`
  padding-left: 15px;
  align-items: flex-start;
`;
const FullName = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.dark};
  font-size: ${({
  theme
}) => theme.fonts.largeSize};
  line-height: 24px;
  letter-spacing: -0.27px;
`;
const Role = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.primary};
  font-size: ${({
  theme
}) => theme.fonts.smallSize};
  line-height: 28px;
  letter-spacing: -0.4px;
`;
const FakeImageContainer = _styled.default.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${({
  theme
}) => theme.colors.highlight};
  justify-content: center;
  align-items: center;
`;
const FakeImageText = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.light};
  font-size: ${({
  theme
}) => theme.fonts.titleSize};
  font-weight: bold;
  text-align: center;
`;
const PhoneNumberBox = _styled.default.View`
  padding-left: 15px;
`;
const PhoneNumber = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.highlight};
`;
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(ContactItem);
//# sourceMappingURL=index.js.map