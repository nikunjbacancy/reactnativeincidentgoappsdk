"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkipButton = exports.PaginationRow = exports.NextButton = exports.BottomNav = exports.Background = void 0;
var _assets = require("../../../../assets");
var _components = require("../../../../components");
var _reactNative = require("react-native");
var _styled = _interopRequireDefault(require("../../../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Background = exports.Background = (0, _styled.default)(_reactNative.Image).attrs({
  source: _assets.images.backgroundWhite()
})`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: null;
  height: null;
  background-color: ${({
  theme
}) => theme.colors.white};
`;
const PaginationRow = exports.PaginationRow = _styled.default.View`
  margin-top: auto;
  margin-bottom: 20px;
`;
const BottomNav = exports.BottomNav = _styled.default.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px 30px;
  background: ${({
  theme
}) => theme.sdkBackgroundColor};
`;
const SkipButton = exports.SkipButton = (0, _styled.default)(_components.GradientButton)`
  width: 75%;
  justify-content: center;
  align-items: center;
  background-color: ${({
  theme
}) => theme.colors.highlight};
`;
const NextButton = exports.NextButton = (0, _styled.default)(_components.GradientButton).attrs({
  image: _assets.images.icLinkArrow()
})`
  width: 20%;
  background-color: ${({
  theme
}) => theme.colors.lightGrey};
`;
//# sourceMappingURL=styles.js.map