"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../assets");
var _react = _interopRequireDefault(require("react"));
var _navigation = _interopRequireDefault(require("../../utils/navigation"));
var _styled = _interopRequireDefault(require("../../utils/styled"));
var _IconButton = _interopRequireDefault(require("../IconButton"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const BackButton = ({
  style,
  back
}) => /*#__PURE__*/_react.default.createElement(BackButtonContainer, null, /*#__PURE__*/_react.default.createElement(BackButtonIcon, {
  style: style,
  source: _assets.images.icBack(),
  onPress: back || _navigation.default.back
}));
var _default = exports.default = BackButton;
const BackButtonContainer = _styled.default.View`
  display: flex;
  flex-direction: row;
  height: 50px;
  flex: 0.2;
`;
const BackButtonIcon = (0, _styled.default)(_IconButton.default)`
  background-color: ${({
  theme
}) => theme.colors.background2};
  height: 100%;
`;
//# sourceMappingURL=index.js.map