"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _components = require("../../../components");
var _react = _interopRequireDefault(require("react"));
var _reactNavigationTabs = require("react-navigation-tabs");
var _styled = _interopRequireDefault(require("../../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable react/jsx-props-no-spreading */

const TopTabBar = props => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.Header, {
    title: "My tips"
  }), /*#__PURE__*/_react.default.createElement(StyledTopTabBar, props));
};
const StyledTopTabBar = (0, _styled.default)(_reactNavigationTabs.MaterialTopTabBar)`
  background-color: ${({
  theme
}) => theme.sdkBackgroundColor};
  margin-bottom: 25px;
`;
var _default = exports.default = TopTabBar;
//# sourceMappingURL=TopTabBar.js.map