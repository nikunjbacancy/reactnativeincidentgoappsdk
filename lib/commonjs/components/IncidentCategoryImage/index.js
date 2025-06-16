"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../assets");
var _incidentCodeCore = require("incident-code-core");
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeLinearGradient = _interopRequireDefault(require("react-native-linear-gradient"));
var _hooks = require("../../utils/hooks");
var _styled = _interopRequireWildcard(require("../../utils/styled"));
var _Badge = _interopRequireDefault(require("../Badge"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const IncidentCategoryImage = ({
  badges,
  incidentType,
  active,
  category,
  border,
  thumbnail
}) => {
  const incidentCategoryConfig = (0, _hooks.useIncidentCategoryConfig)(category);
  const renderVideoThumb = () => {
    return thumbnail ? /*#__PURE__*/_react.default.createElement(ImageBox, {
      source: {
        uri: thumbnail
      }
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
      source: _assets.images.icPlay()
    })) : /*#__PURE__*/_react.default.createElement(LargeImage, {
      source: incidentType !== _incidentCodeCore.IncidentType.Normal ? _assets.images.icEscort() : {
        uri: incidentCategoryConfig.imageUrl
      }
    });
  };
  const renderImage = smaller => /*#__PURE__*/_react.default.createElement(Container, {
    smaller: smaller
  }, category || incidentType !== _incidentCodeCore.IncidentType.Normal ? renderVideoThumb() : /*#__PURE__*/_react.default.createElement(DotsContainer, null, /*#__PURE__*/_react.default.createElement(Dot, null), /*#__PURE__*/_react.default.createElement(DotWithMargin, null), /*#__PURE__*/_react.default.createElement(Dot, null)));
  if (!border) return renderImage(true);
  return /*#__PURE__*/_react.default.createElement(ImageContainer, null, /*#__PURE__*/_react.default.createElement(GradientBorder, {
    colors: incidentCategoryConfig.backgroundGradientColors,
    start: {
      x: 0.0,
      y: 1.0
    },
    end: {
      x: 1.0,
      y: 0.0
    }
  }, renderImage()), !(0, _isEmpty.default)(badges) && /*#__PURE__*/_react.default.createElement(StyledBadge, {
    length: badges === null || badges === void 0 ? void 0 : badges.length
  }), /*#__PURE__*/_react.default.createElement(ResolvedCircle, {
    active: active
  }));
};
const ImageContainer = _styled.default.View`
  position: relative;
`;
const ResolvedCircle = _styled.default.View`
  background-color: ${({
  active,
  theme: {
    colors
  }
}) => active ? colors.green : colors.blue};
  width: 20px;
  height: 20px;
  border-radius: 10px;
  position: absolute;
  bottom: -3px;
  right: -12px;
  border-width: 3px;
  border-color: ${({
  theme
}) => theme.colors.nearWhite};
`;
const StyledBadge = (0, _styled.default)(_Badge.default)`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  position: absolute;
  top: -3px;
  right: -12px;
  border-width: 3px;
  border-color: ${({
  theme
}) => theme.colors.nearWhite};
`;
const GradientBorder = (0, _styled.default)(_reactNativeLinearGradient.default)`
  height: 42px;
  width: 42px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;
const smallerContainer = (0, _styled.css)`
  height: 42px;
  width: 42px;
  background-color: ${({
  theme
}) => theme.colors.background};
  border-radius: 15px;
`;
const imageBox = (0, _styled.css)`
  height: 42px;
  width: 42px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;
const ImageBox = _styled.default.ImageBackground.attrs(() => ({
  imageStyle: {
    height: 42,
    width: 42,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  }
}))`
  ${imageBox}
`;
const Container = _styled.default.View`
  ${imageBox}
  ${({
  smaller
}) => smaller && smallerContainer};
`;
const LargeImage = _styled.default.Image`
  height: 36px;
  width: 36px;
  tint-color: ${({
  theme
}) => theme.colors.white};
`;
const DotsContainer = _styled.default.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Dot = _styled.default.View`
  width: 7px;
  height: 7px;
  border-radius: ${() => `${7 / 2}px`};
  background-color: ${({
  theme
}) => theme.colors.white};
`;
const DotWithMargin = _styled.default.View`
  ${Dot};
  margin-left: 4px;
  margin-right: 4px;
`;
var _default = exports.default = IncidentCategoryImage;
//# sourceMappingURL=index.js.map