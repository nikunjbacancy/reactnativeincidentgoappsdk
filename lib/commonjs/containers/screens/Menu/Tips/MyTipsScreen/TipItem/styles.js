"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViolationText = exports.ViolationContainer = exports.TextTitle = exports.TextDescription = exports.TextContainer = exports.Marker = exports.MapSnapshotContainer = exports.MapOverlayTitle = exports.MapOverlayContainer = exports.MapOverlayAddress = exports.MapImage = exports.InfoContainer = exports.Container = void 0;
var _reactNativeLinearGradient = _interopRequireDefault(require("react-native-linear-gradient"));
var _styled = _interopRequireDefault(require("../../../../../../utils/styled"));
var _TipMarker = _interopRequireDefault(require("../TipMarker"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Container = exports.Container = _styled.default.View`
  margin-bottom: 20px;
  border-radius: 3px;
  background-color: ${({
  theme
}) => theme.colors.nearWhite};
`;
const InfoContainer = exports.InfoContainer = _styled.default.View`
  padding: 10px;
  flex-direction: row;
  flex-wrap: nowrap;
`;
const TextContainer = exports.TextContainer = _styled.default.View`
  margin-left: 15px;
`;
const TextTitle = exports.TextTitle = _styled.default.Text`
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  line-height: 24px;
  letter-spacing: -0.24px;
  color: ${({
  theme
}) => theme.colors.dark};
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
`;
const TextDescription = exports.TextDescription = _styled.default.Text`
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.2px;
  color: ${({
  theme
}) => theme.colors.grey};
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
`;
const MapSnapshotContainer = exports.MapSnapshotContainer = _styled.default.View`
  height: 100px;
  overflow: hidden;
`;
const MapOverlayContainer = exports.MapOverlayContainer = (0, _styled.default)(_reactNativeLinearGradient.default)`
  width: 100%;
  height: 100%;
  z-index: 2;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  padding-bottom: 0;
`;
const MapOverlayTitle = exports.MapOverlayTitle = _styled.default.Text`
  font-size: 15px;
  color: ${({
  theme,
  isClosed
}) => isClosed ? theme.colors.light : theme.colors.primary};
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  letter-spacing: -0.2px;
  margin-top: auto;
`;
const MapOverlayAddress = exports.MapOverlayAddress = _styled.default.Text`
  font-size: 15px;
  color: ${({
  theme
}) => theme.colors.light};
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  line-height: 18px;
  letter-spacing: -0.24px;
`;
const ViolationContainer = exports.ViolationContainer = (0, _styled.default)(_reactNativeLinearGradient.default)`
  width: 100%;
  height: 100%;
  z-index: 2;
  align-items: flex-start;
  padding: 10px;
`;
const ViolationText = exports.ViolationText = _styled.default.Text`
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  color: ${({
  theme
}) => theme.colors.red};
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  line-height: 24px;
`;
const MapImage = exports.MapImage = _styled.default.Image`
  position: absolute;
  width: 100%;
  height: 100%;
  resize-mode: cover;
  opacity: ${({
  isClosed
}) => isClosed ? 0.3 : 1};
`;
const Marker = exports.Marker = (0, _styled.default)(_TipMarker.default)`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -17.5px;
  margin-top: -14px;
`;
//# sourceMappingURL=styles.js.map